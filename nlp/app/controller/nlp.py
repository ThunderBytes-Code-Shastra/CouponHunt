import spacy
import random
from app.controller import blueprint,jsonify,request


@blueprint.route('/api/nlp',methods=["POST"])
def getBankName():
    sms = request.json['sms']
    def dates():
        l = ["2/3/2022","29/5/2022","1/6/2022"]
        a = random.randint(0,len(l)-1)
        return l[a]
    nlp = spacy.load("en_core_web_sm")
    doc = nlp(sms)
    dict = {}
    for ent in doc.ents:
        a = ent.text, ent.start_char, ent.end_char, ent.label_
        for i in a :
            dict.update({ent.label_:ent.text})
            dict.update({"expiry_date": dates()})
    return jsonify(dict)