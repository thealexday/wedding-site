

export function useForm( form, setForm, setIsComingError, setInputError, setIsTransferError, setModal){
    
    const onSubmit = async (event) => {
        event.preventDefault();

        if(form.name){
            setInputError(false)
        } else {
            setInputError(true)
            return
        }

        if (form.go || form.notGo || form.doNotKnow){
            setIsComingError(false)
        } else {
            setIsComingError(true)
            return
        }

        if (form.haveCar || form.notHaveCar){
            setIsTransferError(false)
        } else {
            setIsTransferError(true)
            return
        }
        
        const formData = new FormData(event.target);

        formData.append("access_key", "4ac6751f-4bf1-49fa-89d0-e6a556dc11b7");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
        }

        setForm({
            ...form,
            name: '',
            go: false,
            notGo: false,
            doNotKnow: false,
            haveCar: false,
            notHaveCar: false,
        })

        setModal(true)
    };

   return onSubmit
}