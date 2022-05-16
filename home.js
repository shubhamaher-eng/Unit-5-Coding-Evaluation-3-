let container = document.getElementById('displayTable');


    let url = `https://api.openbrewerydb.org/breweries`;
async function dataDisplay(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        // console.log(data)
        displayInfo(data);
    }
    catch(err){
        console.log(err)
    }
}

dataDisplay()

function displayInfo(data){
    data.forEach(function(product){
        let brewerycard = document.createElement('tr')

        let brewery_name= document.createElement('td')
        brewery_name.innerHTML = product.name

        let type= document.createElement('td')
        type.innerHTML = product.brewery_type

        let city= document.createElement('td')
        city.innerHTML = product.city

        let state= document.createElement('td')
        state.innerHTML = product.state

        let button = document.createElement('td')
        
        let btn = document.createElement('a')
        btn.textContent = 'More Details'

        button.appendChild(btn)

        brewerycard.append(brewery_name,type,city,state,button)

        container.append(brewerycard)  
    });
}