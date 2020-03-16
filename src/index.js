module.exports = function toReadable (number) {
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 
    'ten', 'eleven', 'twelve','thirteen','fourteen','fifteen','sixteen', 'seventeen', 'eighteen', 'nineteen'];
    
    if(number < 20)
        return numbers[number];

    const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    if(number < 100) {
        if(number % 10 === 0) 
            return tens[number/10];
        else return tens[Math.floor(number/10)] + ' ' + numbers[number%10];
    }
    if(number % 100 === 0) {
        return numbers[number/100] + ' hundred';
    }
    if(number%10 === 0) {
        return numbers[Math.floor(number/100)] + ' hundred ' + tens[number%100/10];
    }
    if(number%100 < 20)
        return numbers[Math.floor(number/100)] + ' hundred ' + numbers[number%100];
    return numbers[Math.floor(number/100)] + ' hundred ' + tens[Math.floor(number%100/10)] + ' ' + numbers[Math.floor(number%10)];
}
