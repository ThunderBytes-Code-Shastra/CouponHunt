import spacy
import random
from app.controller import blueprint,jsonify,request
from googletrans import Translator
from googletrans import Translator
import regex as re
# doc = nlp("Apple is looking at buying U.K. startup for $1 billion https://helloWorld.com")
# copy = "Apple is looking at buying U.K. startup for $1 billion https://helloWorld.com"
# print(re.search("(?P<url>https?://[^\s]+)", copy).group("url"))
# for ent in doc.ents:
#     print(ent.text, ent.start_char, ent.end_char, ent.label_)

def getBankName(sms):
    def dates():
        l = ["2/3/2022","29/5/2022","1/6/2022"]
        a = random.randint(0,len(l)-1)
        return l[a]
    nlp = spacy.load("en_core_web_sm")
    doc = nlp(sms)
    dict = {}
    # dict.update({"url   ":re.search("(?P<url>https?://[^\s]+)", sms).group("url")})
    for ent in doc.ents:
        a = ent.text, ent.start_char, ent.end_char, ent.label_
        for i in a :
            dict.update({ent.label_:ent.text})
            dict.update({"expiry_date": dates()})
    return dict


@blueprint.route('/api/nlp',methods=["POST"])
def nlp():
    sms=request.json['sms']
    return jsonify(getBankName(sms))

@blueprint.route('/api/translation',methods={"POST"})
def translate():
    messages = request.json['messages']
    print(messages)
    translator = Translator()
    translations = []
    banks = []
    for message in messages:
        translation = translator.translate(message).text
        translations.append(translation)
        banks.append(getBankName(translation))
        print(getBankName(translation))

    print(translations)
    return jsonify(banks)
