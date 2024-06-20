function updateLinks(originalLink, newLink) {
    // Get all <a> elements in the document
    const anchors = document.querySelectorAll('a');
    
    // Loop through each <a> element
    anchors.forEach(anchor => {
        // Check if the href attribute matches the original link
        if (anchor.href === originalLink) {
            // Update the href attribute to the new link
            anchor.href = newLink;
        }
    });
}

Math.log100 = function(num) {
    return Math.log(num) / Math.log(100);
};

function matchKeyCombo(sequence) {
    // Initialize result counters
    let result1 = 0;
    let result2 = 0;
    
    // Define the key combinations
    let combo1 = 'QEE';
    let combo2 = 'ZCC';
    
    // Compare the sequence with each combo ignoring case
    if (sequence.toUpperCase() === combo1.toUpperCase()) {
        result1++;
    }

    if (sequence.toUpperCase() === combo2.toUpperCase()) {
        result2++;
    }

    // Check if both results are the same
    return result1 === result2;
}