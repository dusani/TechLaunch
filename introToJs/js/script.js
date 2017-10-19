var user = {
    name: "Daniel Usani",
    companyName: "TechLaunch.io",
    address: "8400 NW 36th #450, Doral, FL 33166",
    email: "dusani@techlaunch.io",
    picture: "headshot.jpg"
}

var invoices = [
    {
        inv_id: "0156321",
        companyName: user.companyName,
        date: "9/7/2017",
        order: "Dell Computers",
        quantity: 3,
        cost: 3457.67,
        paid: 3457.67,
    },
    {
        inv_id: 01445632,
        companyName: user.companyName,
        date: "1/5/2017",
        order: "HP Printers",
        quantity: 2,
        cost: 248.00,
        paid: 150.00,
    },
    {
        inv_id: 0132110,
        companyName: user.companyName,
        date: "6/14/2016",
        order: "Marketing Coffee Mugs",
        quantity: 160,
        cost: 414.00,
        paid: 414.00,
    },

    // Additional Invoices
    {
        inv_id: 7463529,
        companyName: user.companyName,
        date: "6/11/2015",
        order: "Business Cards",
        quantity: 1000,
        cost: 300.00,
        paid: 300.00,
    },
    {
        inv_id: 0002745,
        companyName: user.companyName,
        date: "7/7/2017",
        order: "Company Luncheon",
        quantity: 10,
        cost: 120.21,
        paid: 120.21,
    },
    {
        inv_id: 2718493,
        companyName: user.companyName,
        date: "8/26/2017",
        order: "Company Retreat",
        quantity: 10,
        cost: 11000.00,
        paid: 11000.00,
    },
]

document.querySelector(".name").textContent = user.name;
document.querySelector(".company_name").textContent = user.companyName;
document.querySelector(".address").textContent = user.address;
document.querySelector(".email").textContent = user.email;

// adding invoices
for(var i=0; i<invoices.length; i++){
    document.querySelector(".invoiceContainer").innerHTML += `
    <div class="invoice" id=${invoices[i].inv_id}">
        Invoice #: <br>
        <p>${invoices[i].inv_id}</p>
        Company Name: <br>
        <p>${invoices[i].companyName}</p>
        Date: <br>
        <p>${invoices[i].date}</p>
        Order: <br>
        <p>${invoices[i].order}</p>
        Quantity: <br>
        <p>${invoices[i].quantity}</p>
        Cost: <br>
        <p>$${invoices[i].cost}</p>
        Paid: <br>
        <p>$${invoices[i].paid}</p>
        Owed: <br>
        <p>$${invoices[i].cost - invoices[i].paid}</p>
    </div>
    `
}