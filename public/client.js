document.addEventListener("DOMContentLoaded", function() {

  var submitButton = document.getElementById('submit');

  var emailLink = document.querySelector('.link');

  var isValidated = false;

  submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    var visitorName = document.getElementById('name').value;

    console.log(visitorName);
    visitorName = capitalize(visitorName);

    switch(visitorName) {
      case 'Mohammed':
      case 'Mohamed':
      case 'Mohammad': 
      case 'Mohamad': 
      case 'Muhamad':
      case 'Muhamed':
      case 'Muhammad':
      case 'Muhammadu': 
      case 'Muhammed':
      case 'Muhammet':
        displayEmailLink();
        isValidated = true;
        visitorName = 'Mohammed';
        break;
      case 'Aarav':
        displayEmailLink();
        isValidated = true;
        visitorName = 'Aarav';
        break;
      case 'Wei':
        displayEmailLink();
        isValidated = true;
        visitorName = 'Wei';
        break;
      case 'Noah':
      case 'Noam': 
      case 'Noa':
      case 'Nuhu':
      case 'Noy':
      case 'Noe':
      case 'Nooa':
      case 'Noakh':
      case 'Noass':
      case 'Nojus':
        displayEmailLink();
        isValidated = true;
        visitorName = 'Noah';
        break;
      case 'Santiago':
      case 'San Iago':
      case 'San Tiago':
      case 'Santyago':
      case 'Sant-Yago':
      case 'San Thiago':
        displayEmailLink();
        isValidated = true;
        visitorName = 'Santiago';
        break;
      case 'Fatima':
      case 'Fatma':
      case 'Fatemeh':
      case 'Fatimah':
      case 'Fadime':
        displayEmailLink();
        isValidated = true;
        visitorName = 'Fatima';
        break;
      case 'Mary':
      case 'Marie':
      case 'Mariam':
      case 'Maria':
      case 'Mari':
      case 'Mariya':
      case 'Marija':
        displayEmailLink();
        isValidated = true;
        visitorName = 'Mary';
        break;
      case 'Jing':
        displayEmailLink();
        isValidated = true;
        visitorName = 'Jing';
        break;
      case 'Amelia':
      case 'Amalia':
      case 'Emilia':
        displayEmailLink();
        isValidated = true;
        visitorName = 'Amelia';
        break;
      case 'Emma':
      case 'Ema':
      case 'Emmy':
      case 'Em':
        displayEmailLink();
        isValidated = true;
        visitorName = 'Emma';
        break;
      case 'Alireza':
        displayEmailLink();
        isValidated = true;
        visitorName = 'Alireza';
        break;
      default:
        displayInvalidated();
        break;
    }
    if(isValidated) {
      $.post('/samenamesocialexperiment/howbigcanitget', { name: visitorName });
    }

  }); 

  function displayInvalidated() {
    emailLink.style.display = 'none';
    var para = document.createElement("p");
    para.innerText = "Your name is not validated in our system, which leads us to believe you've arrived to our website by chance. If not, try entering your name again.";
    var message = document.querySelector(".userAction");
    para.classList.add('invisible');
    message.append(para);
    para.classList.remove('invisible');
  } 

  function displayEmailLink() {
    emailLink.classList.remove('invisible');
    emailLink.classList.add('visible');
  }

  function capitalize(string) {
    var newString = string.charAt(0).toUpperCase() + string.slice(1);
    console.log(newString);
    return newString;
  }

});
