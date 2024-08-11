import React, { useState } from 'react';

function FarmerGuide() {
  const [language, setLanguage] = useState('gu'); // Default to Gujarati

  const diseases = {
    gu: [
      {
        name: "પાઉડરી મિલ્ડ્યુ",
        description:
          "પાઉડરી મિલ્ડ્યુ એ ફૂગજન્ય રોગ છે જે અનેક છોડને અસર કરે છે, પાંદડાઓ અને ડાંગર પર સફેદ પાઉડરી દાગ પાડે છે.",
        solution: "સારા હવા પ્રસારની ખાતરી કરો, ઉપરથી પાણી ન છાંટો અને જરૂર જણાય તો ફંગિસાઇડ લગાવો.",
      },
      {
        name: "લેટ બ્લાઇટ",
        description:
          "લેટ બ્લાઇટ બટાકા અને ટમેટાંના ફૂગજન્ય રોગ છે, જેમાં પાંદડાઓ, ડાંગર અને ફળોમાં ભૂખરા રંગના ડાઘો થાય છે.",
        solution: "અસ્વસ્થ છોડ દૂર કરો, પાક ફેરફાર કરો અને પ્રતિકારક જાતિઓ વાવો.",
      },
      {
        name: "રસ્ટ",
        description:
          "રસ્ટ રોગો પાંદડાઓ પર નારંગી, ભૂખરા, અથવા પીળા દાવા બનાવે છે, અને પાકની ઉપજમાં મોટો ઘટાડો કરી શકે છે.",
        solution: "ફંગિસાઇડ લાગુ કરો, અસરગ્રસ્ત પાંદડાઓ દૂર કરો, અને પ્રતિકારક જાતિઓ વાવો.",
      },
      {
        name: "રૂટ રોટ",
        description:
          "રૂટ રોટ પાણીની વધુ આવક અથવા નાપસીદ ડ્રેનેજને કારણે થાય છે, જે મૂળને ગલનકારક બનાવે છે અને છોડને સુકાઇ જવા માટે કારણ બને છે.",
        solution: "મારણ ક્ષમતામાં સુધારો કરો, પાણી ઓછું કરો, અને જો જરૂરી હોય તો ફંગિસાઇડનો ઉપયોગ કરો.",
      },
      {
        name: "અફીડ્સ",
        description:
          "અફીડ્સ નાનું રસ પાવર ચૂસનારાં જંતુઓ છે જે વાયરલ્સ ફેલાવી શકે છે અને વૃદ્ધિમાં ઘટાડો કરી શકે છે.",
        solution: "જંતુનાશક સાબુઓનો ઉપયોગ કરો, કુદરતી શિકારી પ્રોત્સાહિત કરો, અને અસરગ્રસ્ત છોડ દૂર કરો.",
      },
      {
        name: "ડાઉની મિલ્ડ્યુ",
        description:
          "ડાઉની મિલ્ડ્યુ પાંદડાની ઉપરની સપાટીએ પીળા અથવા સફેદ દાગ તરીકે દેખાય છે, નીચેની બાજુએ સુઝી ગયેલ વૃદ્ધિ સાથે.",
        solution: "સારા હવા પ્રવાહને પ્રોત્સાહિત કરો, ફોલેજને ભીનું કરવાની ટાળો, અને ફંગિસાઇડનો ઉપયોગ કરો.",
      },
      {
        name: "ફુસારિયમ વિલ્ટ",
        description:
          "ફુસારિયમ વિલ્ટ પાંદડાઓની પીળાશ અને સુકાણ લાવે છે, જે સામાન્ય રીતે છોડના એક બાજુ પર શરૂ થાય છે.",
        solution: "બીમારી-રહિત બીજ વાવો, પાક ફેરફાર કરો, અને જરૂર પડીએ તો માટીનું ફ્યુમિગન્ટ લાગુ કરો.",
      },
      {
        name: "ઍન્થ્રાકનોસ",
        description:
          "ઍન્થ્રાકનોસ પાંદડાઓ, ડાંગર, ફૂલ અને ફળ પર અંધારું, ગરમ લેસન્સ બનાવે છે.",
        solution: "અસરગ્રસ્ત છોડના ભાગોને કાપી નાખો અને નાશ કરો, ફંગિસાઇડનો ઉપયોગ કરો, અને ઉપરથી પાણી ન છાંટો.",
      },
      {
        name: "બેક્ટેરિયલ લીફ સ્પોટ",
        description:
          "બેક્ટેરિયલ લીફ સ્પોટ પાંદડાઓ પર નાના, પાણી જેવા ડાઘા બનાવે છે જે મોટા થઈને ભૂખરા થઈ જાય છે.",
        solution: "અસરગ્રસ્ત પાંદડાઓને દૂર કરો અને નાશ કરો, ઉપરથી પાણી ન છાંટો, અને કોપર આધારિત બેક્ટરિસાઇડનો ઉપયોગ કરો.",
      },
      {
        name: "વર્ટિસિલિયમ વિલ્ટ",
        description:
          "વર્ટિસિલિયમ વિલ્ટ પાંદડાઓની પીળાશ અને સુકાણ લાવે છે, જે સામાન્ય રીતે ફક્ત એક બાજુ પર અસર કરે છે.",
        solution: "પ્રતિરોધક જાતિઓ વાવો, પાક ફેરફાર કરો, અને પાથogenen સ્તરો ઘટાડવા માટે સોલરાઇઝ સોઇલ.",
      },
    ],
    en: [
      {
        name: "Powdery Mildew",
        description:
          "Powdery Mildew is a fungal disease that affects a wide range of plants, causing white powdery spots on leaves and stems.",
        solution: "Ensure good air circulation, avoid overhead watering, and apply fungicides if necessary.",
      },
      {
        name: "Late Blight",
        description:
          "Late Blight is a serious disease of potatoes and tomatoes, characterized by brown lesions on leaves, stems, and fruits.",
        solution: "Remove infected plants, rotate crops, and use resistant varieties.",
      },
      {
        name: "Rust",
        description:
          "Rust diseases cause orange, brown, or yellow pustules on leaves, and can significantly reduce crop yield.",
        solution: "Apply fungicides, remove affected leaves, and grow resistant varieties.",
      },
      {
        name: "Root Rot",
        description:
          "Root Rot is caused by overwatering or poor drainage, leading to the decay of roots and plant wilting.",
        solution: "Improve soil drainage, reduce watering, and use fungicides if needed.",
      },
      {
        name: "Aphids",
        description:
          "Aphids are small sap-sucking insects that can transmit viruses and cause stunted growth.",
        solution: "Use insecticidal soaps, encourage natural predators, and remove affected plants.",
      },
      {
        name: "Downy Mildew",
        description:
          "Downy Mildew appears as yellow or white patches on the upper surfaces of leaves, with corresponding fuzzy growth underneath.",
        solution: "Promote good air circulation, avoid wetting foliage, and apply fungicides.",
      },
      {
        name: "Fusarium Wilt",
        description:
          "Fusarium Wilt causes yellowing and wilting of leaves, often starting on one side of the plant.",
        solution: "Use disease-free seeds, rotate crops, and apply soil fumigants if necessary.",
      },
      {
        name: "Anthracnose",
        description:
          "Anthracnose causes dark, sunken lesions on leaves, stems, flowers, and fruits.",
        solution: "Prune and dispose of infected plant parts, use fungicides, and avoid overhead watering.",
      },
      {
        name: "Bacterial Leaf Spot",
        description:
          "Bacterial Leaf Spot causes small, water-soaked spots on leaves that may enlarge and turn brown.",
        solution: "Remove and destroy infected leaves, avoid overhead watering, and apply copper-based bactericides.",
      },
      {
        name: "Verticillium Wilt",
        description:
          "Verticillium Wilt causes yellowing and wilting of leaves, often affecting only one side of the plant.",
        solution: "Use resistant varieties, rotate crops, and solarize soil to reduce pathogen levels.",
      },
    ],
    hi: [
      {
        name: "पाउडरी मिल्ड्यू",
        description:
          "पाउडरी मिल्ड्यू एक कवक जनित रोग है जो कई पौधों को प्रभावित करता है, पत्तियों और तनों पर सफेद पाउडरी धब्बे बना देता है।",
        solution: "अच्छी वायु परिसंचरण सुनिश्चित करें, ओवरहेड पानी से बचें, और अगर आवश्यक हो तो फफूंदीनाशक लागू करें।",
      },
      {
        name: "लेट ब्लाइट",
        description:
          "लेट ब्लाइट आलू और टमाटर का एक गंभीर रोग है, जिसमें पत्तियों, तनों और फलों पर भूरे धब्बे बनते हैं।",
        solution: "संक्रमित पौधों को हटा दें, फसलें बदलें, और प्रतिरोधी किस्में उपयोग करें।",
      },
      {
        name: "रस्ट",
        description:
          "रस्ट रोग पत्तियों पर नारंगी, भूरे, या पीले धब्बे बनाता है, और फसल की उपज को काफी कम कर सकता है।",
        solution: "फफूंदीनाशक लागू करें, प्रभावित पत्तियों को हटा दें, और प्रतिरोधी किस्में उगाएं।",
      },
      {
        name: "रूट रोट",
        description:
          "रूट रोट अधिक पानी देने या खराब जल निकासी के कारण होता है, जिससे जड़ों का सड़न और पौधे का मुरझाना होता है।",
        solution: "मिट्टी की जल निकासी में सुधार करें, पानी कम करें, और अगर जरूरत हो तो फफूंदीनाशक का उपयोग करें।",
      },
      {
        name: "एफिड्स",
        description:
          "एफिड्स छोटे रस चूसने वाले कीड़े हैं जो वायरस फैला सकते हैं और वृद्धि को रोक सकते हैं।",
        solution: "कीटनाशक साबुन का उपयोग करें, प्राकृतिक शिकारियों को प्रोत्साहित करें, और प्रभावित पौधों को हटा दें।",
      },
      {
        name: "डाउन मिलीड्यू",
        description:
          "डाउन मिलीड्यू पत्तियों की ऊपरी सतह पर पीले या सफेद धब्बे के रूप में दिखाई देता है, नीचे की तरफ फजी वृद्धि के साथ।",
        solution: "अच्छी वायु परिसंचरण को बढ़ावा दें, पत्तियों को गीला करने से बचें, और फफूंदीनाशक का उपयोग करें।",
      },
      {
        name: "फुजारियम विल्ट",
        description:
          "फुजारियम विल्ट पत्तियों की पीलीकरण और मुरझाने का कारण बनता है, जो अक्सर पौधे के एक तरफ से शुरू होता है।",
        solution: "बीमारियों से मुक्त बीजों का उपयोग करें, फसलें बदलें, और अगर जरूरत हो तो मिट्टी के फ्यूमिगेंट्स का उपयोग करें।",
      },
      {
        name: "एन्थ्रेक्नोस",
        description:
          "एन्थ्रेक्नोस पत्तियों, तनों, फूलों, और फलों पर गहरे, धंसे हुए धब्बे बनाता है।",
        solution: "संक्रमित पौधों के भागों को छंटाई करें और नष्ट करें, फफूंदीनाशक का उपयोग करें, और ओवरहेड पानी से बचें।",
      },
      {
        name: "बैक्टीरियल लीफ स्पॉट",
        description:
          "बैक्टीरियल लीफ स्पॉट पत्तियों पर छोटे, पानी से भरे धब्बे बनाता है जो बड़े हो सकते हैं और भूरे हो सकते हैं।",
        solution: "संक्रमित पत्तियों को हटा दें और नष्ट करें, ओवरहेड पानी से बचें, और कॉपर आधारित बैक्टीरिसाइड का उपयोग करें।",
      },
      {
        name: "वर्टिसिलियम विल्ट",
        description:
          "वर्टिसिलियम विल्ट पत्तियों की पीलीकरण और मुरझाने का कारण बनता है, जो अक्सर पौधे के केवल एक तरफ को प्रभावित करता है।",
        solution: "प्रतिरोधी किस्मों का उपयोग करें, फसलें बदलें, और रोगजनक स्तरों को कम करने के लिए मिट्टी को सोलराइज करें।",
      },
    ],
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-green-700 text-center mb-12">Crop Diseases Guide</h2>
      <div className="text-center mb-8">
        <button
          className="bg-gray-300 text-black px-4 py-2 rounded-lg mx-2 hover:shadow-2xl hover:bg-green-100"
          onClick={() => handleLanguageChange('gu')}
        >
          Gujarati
        </button>
        <button
          className="bg-gray-300 text-black px-4 py-2 rounded-lg mx-2 hover:shadow-2xl hover:bg-green-100"
          onClick={() => handleLanguageChange('en')}
        >
          English
        </button>
        <button
          className="bg-gray-300 text-black px-4 py-2 rounded-lg mx-2 hover:shadow-2xl hover:bg-green-100"
          onClick={() => handleLanguageChange('hi')}
        >
          Hindi
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {diseases[language].map((disease, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">{disease.name}</h3>
            <p className="text-gray-700 mb-4">{disease.description}</p>
            <p className="text-gray-700 font-semibold">Solution:</p>
            <p className="text-gray-700">{disease.solution}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FarmerGuide;
