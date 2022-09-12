function checkTypeField(data) {
  if (typeof data.domains != "object") {
    return "domains field must be informed and be a array";
  }

  if (typeof data.alpha_two_code != "string") {
    return "alpha_two_code field must be informed and be a text";
  }

  if (typeof data.country != "string") {
    return "country field must be informed and be a text";
  }

  if (typeof data.web_pages != "object") {
    return "web_pages field must be informed and be a array";
  }

  if (typeof data.name != "string") {
    return "name field must be informed and be a text";
  }

  if (typeof data.state_province != "string") {
    return "state_province field must be informed and be a text";
  }
}

function checkFields(data) {
  if (!data.domains) {
    return "Enter the domains Field";
  } else {
    if (data.domains === "" || data.domains.length === 0) {
      return "Field domains Must Be Informed";
    }
  }

  if (!data.alpha_two_code) {
    return "Enter the alpha_two_code Field";
  } else {
    if (
      data.alpha_two_code === "" ||
      data.alpha_two_code.trim().length === 0 ||
      data.alpha_two_code.length === 0
    ) {
      return "Field alpha_two_code Must Be Informed";
    }
  }

  if (!data.country) {
    return "Enter the country Field";
  } else {
    if (
      data.country === "" ||
      data.country.trim().length === 0 ||
      data.country.length === 0
    ) {
      return "Field country Must Be Informed";
    }
  }

  if (!data.web_pages) {
    return "Enter the web_pages Field";
  } else {
    if (data.web_pages === "" || data.web_pages.length === 0) {
      return "Field web_pages Must Be Informed";
    }
  }

  if (!data.name) {
    return "Enter the name Field";
  } else {
    if (
      data.name === "" ||
      data.name.trim().length === 0 ||
      data.name.length === 0
    ) {
      return "Field name Must Be Informed";
    }
  }

  if (!data.state_province) {
    return "Enter the state_province Field";
  } else {
    if (
      data.state_province === "" ||
      data.state_province.trim().length === 0 ||
      data.state_province === 0
    ) {
      return "Field state_province Must Be Informed";
    }
  }
}

function checkFieldsUpdate(data) {
  if (typeof data.domains != "object") {
    return "domains field must be informed and be a array";
  }

  if (typeof data.web_pages != "object") {
    return "web_pages field must be informed and be a array";
  }
  if (typeof data.name != "string") {
    return "name field must be informed and be a text";
  }
}

module.exports = { checkTypeField, checkFields, checkFieldsUpdate };
