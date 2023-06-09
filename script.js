const generatePasswordButton = document.querySelector('#generate-password');
const generatedPasswordElement = document.querySelector('#generated-password');
const passwordElement = document.querySelector('h4');
const copyButton = document.querySelector('i');
const copiedElement = document.querySelector('#copied');

const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
};

const getSymbol = () => {
    const symbols = '()[]{}<>,.+=-_;:@#$%*|\/?!';
    return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {

    let password = '';
    const passwordLength = 10;

    const generators = [
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    ];

    for(i = 0; i < passwordLength; i = i + 4) {

        generators.forEach(() => {

            const randomValue = generators[Math.floor(Math.random() * generators.length)]();
            password += randomValue;

        });

        password = password.slice(0, passwordLength);

        generatedPasswordElement.querySelector('h4').innerText = password;
        generatedPasswordElement.style.display = 'flex';

    };

};

function copyToClipboard() {

    navigator.clipboard.writeText(passwordElement.innerText).then(() => {

        copiedElement.classList.remove('hide');
        return setTimeout(() => copiedElement.classList.add('hide'), 1000);
        
    });

};

generatePasswordButton.addEventListener('click', () => {
    generatePassword(getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol);
});

copyButton.addEventListener('click', () => {
    copyToClipboard();
});