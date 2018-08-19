// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// Examples

// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""

// // "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"

// my solution
function maskify (str) {
    if(str.length > 4){
        let newStr = str.substring(str.length - 4);
        let maskedChars = "#";
        return maskedChars.repeat(str.length - 4) + newStr;
    }
    else { return str;}
}

maskify("87638476237868777777");

// best solution - pretty clever
function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

// ==================================================================================
// ==================================================================================
