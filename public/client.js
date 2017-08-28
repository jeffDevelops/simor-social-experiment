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
      $.post('/samenamesocialexperiment/howbigcanitget', { name: visitorName })
      .done(function(result) {
        console.log(result);
        displayResults(result);
      });
    }

  });

  function displayResults(data) {
    console.log('display results func: ' + JSON.stringify(data));
    var resultsDiv = document.querySelector('.results');
    resultsDiv.innerHTML = '';

    var title = document.createElement('h4');
    title.innerText = 'Campaign Reach by Name';
    resultsDiv.appendChild(title);

    var mohammed = document.createElement('p');
    mohammed.innerHTML = 'Mohammed, or variants: <span class="text_right">' + data.trafficMohammed + '</span>';
    resultsDiv.appendChild(mohammed);

    var aarav = document.createElement('p');
    aarav.innerHTML = 'Aarav, or variants: <span class="text_right">' + data.trafficAarav + '</span>';
    resultsDiv.appendChild(aarav);

    var wei = document.createElement('p');
    wei.innerHTML = 'Wei, or variants: <span class="text_right">' + data.trafficWei + '</span>';
    resultsDiv.appendChild(wei);

    var noah = document.createElement('p');
    noah.innerHTML = 'Noah, or variants: <span class="text_right">' + data.trafficNoah + '</span>';
    resultsDiv.appendChild(noah);

    var santiago = document.createElement('p');
    santiago.innerHTML = 'Santiago, or variants: <span class="text_right">' + data.trafficSantiago + '</span>';
    resultsDiv.appendChild(santiago);

    var alireza = document.createElement('p');
    alireza.innerHTML = 'Alireza, or variants: <span class="text_right">' + data.trafficAlireza + '</span>';
    resultsDiv.appendChild(alireza);

    var fatima = document.createElement('p');
    fatima.innerHTML = 'Fatima, or variants: <span class="text_right">' + data.trafficFatima + '</span>';
    resultsDiv.appendChild(fatima);

    var mary = document.createElement('p');
    mary.innerHTML = 'Mary, or variants: <span class="text_right">' + data.trafficMary + '</span>';
    resultsDiv.appendChild(mary);

    var jing = document.createElement('p');
    jing.innerHTML = 'Jing, or variants: <span class="text_right">' + data.trafficJing + '</span>';
    resultsDiv.appendChild(jing);

    var amelia = document.createElement('p');
    amelia.innerHTML = 'Amelia, or variants: <span class="text_right">' + data.trafficAmelia + '</span>';
    resultsDiv.appendChild(amelia);

    var emma = document.createElement('p');
    emma.innerHTML = 'Emma, or variants: <span class="text_right">' + data.trafficEmma + '</span>';
    resultsDiv.appendChild(emma);

    
    var total = document.createElement('p');
    total.innerHTML = 'Total Validated Site Traffic: <span class="text_right">' + data.validatedTrafficTotal + '</span>';
    resultsDiv.appendChild(total);

  }

  function displayInvalidated() {
    emailLink.style.display = 'none';

    var message = document.querySelector(".userAction");

    var para = document.createElement("p");
    para.innerText = 'Your name is not validated in our system, which leads us to believe you\'ve arrived to our website by chance. If not, try entering your name again.';
    message.append(para);
    para.className = 'invisible';
    para.className = 'visible';
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
