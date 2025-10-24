import google.generativeai as genai
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import os
genai.configure(api_key=os.getenv('GEMINI_API_KEY'))
model = genai.GenerativeModel('gemini-1.5-flash')#the correct model name

@csrf_exempt
def process_transcript(request):
    try:
        if request.method == 'POST':
            # Safely parse JSON, provide defaults
            data = json.loads(request.body.decode('utf-8')) if request.body else {}
            original_text = data.get('text', '')
            input_lang = data.get('input_lang', 'en')
            output_lang = data.get('output_lang', 'es')

            if not original_text:
                return JsonResponse({'error': 'No text provided'}, status=400)

            # Enhance for medical accuracy
            prompt = f"Correct this medical transcript for accuracy: {original_text}"
            response = model.generate_content(prompt)
            enhanced_text = getattr(response, 'text', 'Error in enhancement')

            # Translate
            trans_prompt = f"Translate this to {output_lang} from {input_lang}: {enhanced_text}"
            trans_response = model.generate_content(trans_prompt)
            translated_text = getattr(trans_response, 'text', 'Error in translation')

            return JsonResponse({'enhanced': enhanced_text, 'translated': translated_text})
    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON data'}, status=400)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Method not allowed'}, status=405)