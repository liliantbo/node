async function postFormDataAsJson({ url, formData }) {
    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJsonString = JSON.stringify(plainFormData);

    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: formDataJsonString,
    };

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }

    return response.json();
  }

  async function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const url = form.action;

    let response;

    try {
      const formData = new FormData(form);
      const responseData = await postFormDataAsJson({ url, formData });

      console.log({ responseData });
      response = responseData;
    } catch (error) {
      console.error(error);
    }

    if (response.code == 'ok') {
        window.location.href = response.url;
        return;
    }

    document.getElementById("response_message").innerHTML = (response) ? response.message : "";
    form.reset();
}