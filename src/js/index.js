const calculateComplexity = function (password) {
    let complexity = 0;
    
    const regExps = [ 
        /[a-z]/,
        /[A-Z]/,
        /[0-9]/,
        /.{8}/,
        /.{16}/,
        /[!-//:-@[-`{-ÿ]/
    ];
    
    regExps.forEach(function (regexp) {
        if (regexp.test(password)) {
            complexity++;
        }
    });
    
    return {
        value: complexity,
        max: regExps.length
    };
};

const checkPasswordStregth = function (password) {
    const progress = document.querySelector('#progress');
    const message = document.querySelector('.box__message');
    const complexity = calculateComplexity(this.value);
    const cx = complexity.value;

    if (cx == 0) {
        message.innerText = '';
    } else if (cx == 1) {
        message.innerText = 'Weak';
        message.style.display = "block";
    } else if (cx == 2) {
        message.innerText = 'Medium';
    } else if (cx == 3) {
        message.innerText = 'Strong';
    } else if (cx == 4) {
        message.innerText = 'Very Strong';
    } else if (cx == 5) {
        message.innerText = 'Awesome!';
    } else if (cx == 6) {
        message.innerText = 'VERY AWESOME!';
    }
    
    progress.value = complexity.value;
    progress.max = complexity.max;
  };
  
  const input = document.querySelector('.box__input');
  input.addEventListener('input', checkPasswordStregth);