import axios from 'axios';

handleSubmit();
const handleSubmit = async () => {
    try {
        const response = await axios.post('http://localhost:4000/PRcalculator', {
            age: age,
            englishProficiency: englishProficiency,
            overseasWorkExperience: overseasWorkExperience,
            australianWorkExperience: australianWorkExperience,
            education: education,
            otherFactors: otherFactors,
            sponsorshipsAndNominations: sponsorshipsAndNominations,
            visaSubclass: visaSubclass,
            name: name,
            email: email,
            phone: phone,
            nearestCanApproveOffice: nearestCanApproveOffice,
            city: city
        });

        console.log(response.data.message); // Output: PR Calculator data saved successfully
    } catch (error) {
        console.error('Error:', error.message); // Output: Error message if request fails
    }
}