const htmlCards = employees => {

    const htmlManager = manager => {
        return `
        <div class="card bg-light shadow rounded" style="width: 16rem;">
            <div class="card-body text-light bg-primary">
                <h5 class="card-title">${manager.getName()}</h5>
                <span class="fa fa-user"></span> ${manager.getRole()}
            </div>
            <ul class="list-group list-group-flush border m-3">
                <li class="list-group-item bg-white ">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
        `;
    };
    
    const htmlEngineer = engineer => {
        return `
        <div class="card bg-light shadow rounded" style="width: 16rem;">
            <div class="card-body text-light bg-primary">
                <h5 class="card-title text-light">${engineer.getName()}</h5>
                <i class="fa fa-user-o"></i> ${engineer.getRole()}
            </div>
            <ul class="list-group list-group-flush border m-3">
                <li class="list-group-item bg-white ">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitUser()}" target="_blank">${engineer.getGitUser()}</a></li>
            </ul>
        </div>
        `;
    };
    
    const htmlIntern = intern => {
        return `
        <div class="card bg-light shadow rounded" style="width: 16rem;">
            <div class="card-body  text-light bg-primary">
                <h5 class="card-title text-light">${intern.getName()}</h5>
                <span class="fa fa-graduation-cap"> ${intern.getRole()}
            </div>
            <ul class="list-group list-group-flush border m-3">
                <li class="list-group-item bg-white ">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
        `;
    };
    
    const cardArray = [];
    
    cardArray.push(employees.filter(employee => employee.getRole() === "Manager")
        .map(manager => htmlManager(manager))
    );
    
    cardArray.push(employees.filter(employee => employee.getRole() === "Engineer")
        .map(engineer => htmlEngineer(engineer))
    );
    
    cardArray.push(employees.filter(employee => employee.getRole() === "Intern")
        .map(intern => htmlIntern(intern))
    );
    
    return (cardArray.join(" "));
    
};
    
    
module.exports = employees => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="./css/styles.css">
        <title>Nahid Team Profile Generator</title>
    </head>
    <body>
        <main>
            <div class="jumbotron jumbotron-fluid blue p-5">
                <h1 class="text-center text-light">My Team</h1>
            </div>
        </main>
        <section>
            <div class="container-fluid">
                <div class="row justify-content-center">
                    ${htmlCards(employees)}
                </div>
            </div>
        </section>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
    </body>
    </html>
    `
};