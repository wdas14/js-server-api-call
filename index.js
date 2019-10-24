const xmlHttpRequest = (() => {

    const showResults = (results) => {
        for(let i = 0; i <= results.length - 1; i++){
            document.getElementById('container').innerHTML += `
            <div class="jobTitle" id="job-${i}">${results[i].jobTitle}</div>
            <div class="hide">${results[i].jobDescription}</div>
            `
        }
    }

    const getData = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        
        const results = data.results.filter((item, i) => {
            if(i < 10) {
                return item;
            }

            return;
        });

        showResults(results)
    }

    document.addEventListener('click', (e) => {
        if(e.target.className === 'jobTitle') {
            const el = document.getElementById(event.target.id).nextSibling.nextSibling;

            if(el.classList.contains('hide')) {
                el.classList.remove("hide");
            }else {
                el.classList.add("hide");
            }
        }
    })

    const init = (url) => {
        return {
            getData: getData(url)
        };
    };
    
    return {
        init: init
    };

})();

xmlHttpRequest.init('http://localhost:3001/jobs');