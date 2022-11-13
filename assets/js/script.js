$(document).ready( function () {
    $('#myTable').DataTable();
} );

const names = [
    "Leanne Graham",
    "Ervin Howell",
    "Clementine Bauch",
    "Patricia Lebsack",
    "Chelsey Dietrich",
    "Mrs. Dennis Schulist",
    "Kurtis Weissnat",
    "Nicholas Runolfsdottir V",
    "Glenna Reichert",
    "Clementina DuBuque",
  ];
  const username = [
    "Bret",
    "Antonette",
    "Samantha",
    "Karianne",
    "Kamren",
    "Leopoldo_Corkery",
    "Elwyn.Skiles",
    "Maxime_Nienow",
    "Delphine",
    "Moriah.Stanton",
  ];
  const email = [
    "Sincere@april.biz",
    "Shanna@melissa.tv",
    "Nathan@yesenia.net",
    "Julianne.OConner@kory.org",
    "Lucio_Hettinger@annie.ca",
    "Karley_Dach@jasper.info",
    "Telly.Hoeger@billy.biz",
    "Sherwood@rosamond.me",
    "Chaim_McDermott@dana.io",
    "Rey.Padberg@karina.biz",
  ];
  let table = document.getElementById('myTable');
 for (let i=0; i < names.length; i++){
     let tr = document.createElement('tr');
     let td1 = document.createElement('td');
     let td2 = document.createElement('td');
     let td3 = document.createElement('td');
     td1.innerHTML =names[i];
     td2.innerHTML =username[i];
     td3.innerHTML =email[i];
     tr.appendChild(td1);
     tr.appendChild(td2);
     tr.appendChild(td3);
     let tbody =table.tBodies[0];
     tbody.appendChild(tr);
     }
            