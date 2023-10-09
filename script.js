    // // Select the second item and change its background color to green
    // const secondItem = document.querySelector('#items li:nth-child(2)');
    // secondItem.style.backgroundColor = 'green';

    // // Select the third item and make it invisible
    // const thirdItem = document.querySelector('#items li:nth-child(3)');
    // thirdItem.style.display = 'none';

    const secondItem2=document.querySelectorAll("li");
    secondItem2[1].style.color='green';

    const ul=document.querySelectorAll("li:nth-child(odd)");
    ul.forEach((li)=>{
        li.style.backgroundColor='green';
    });


