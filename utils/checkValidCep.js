export const checkValidCep = (cep) => {
    return (/^[0-9]{8}$/).test(cep)
}