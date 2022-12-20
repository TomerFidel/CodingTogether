export const validationScheme = {
    name: validateName,
    date: validateDate
}

function validateName(value: string): string | undefined {
    if (!value) {
        return "Required!";
    }

    if (value.length > 30)  {
        return "Name must contain up to 30 characters";
    }
}

function validateDate(value: string): string | undefined {
    if (!value) {
        return "Required!";
    }

    if (!value.match(/[\d]{2}\/[\d]{2}\/[\d]{4}/)) {
        return "Date be in the format dd/mm/yyyy";
    }
}