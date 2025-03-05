// Function to toggle Div 1 (using inline onclick attribute)
function toggleDiv1() {
    const div1 = document.getElementById('div-1');
    if (div1.classList.contains('hidden')) {
        div1.classList.remove('hidden');
    } else {
        div1.classList.add('hidden');
    }
}

// Function to toggle Div 2 (using JavaScript event listener)
function toggleDiv2() {
    const div2 = document.getElementById('div-2');
    if (div2.classList.contains('hidden')) {
        div2.classList.remove('hidden');
    } else {
        div2.classList.add('hidden');
    }
}

// Add click event listener to Button 2
document.getElementById('button-2').addEventListener('click', toggleDiv2);