const buttons = document.querySelectorAll('button');
const turbulence = document.querySelector('feTurbulence');
let verticalFrequency = 0.00001;
turbulence.setAttribute('baseFrequency', `0.01 ${verticalFrequency}`);
const steps = 30;
const interval = 10;

buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    verticalFrequency = 0.00001;

    for (i = 0; i < steps; i++) {
      setTimeout(() => {
        verticalFrequency += 0.01;
        turbulence.setAttribute('baseFrequency', `0.01 ${verticalFrequency}`);
      }, interval);
    }

    setTimeout(() => {
      verticalFrequency = 0.01;
      turbulence.setAttribute('baseFrequency', `0.00001 ${verticalFrequency}`);
    }, 1000);
  });
});
