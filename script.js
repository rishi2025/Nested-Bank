// data
//______________________________________________________________________________
const account1 = {
    owner: "Rishi Jha",
    password: "137",
    movements: [5000, 20000, -10000, 762, -861, 42, 9873, -1287],
    mdates: [
        "2023-01-21T08:42:30.741Z",
        "2023-05-23T08:42:30.741Z",
        "2023-05-27T08:42:30.741Z",
        "2023-07-27T08:42:30.741Z",
        "2023-07-04T08:42:30.741Z",
        "2023-08-04T08:42:30.741Z",
        "2023-08-10T08:42:30.741Z",
        "2023-08-18T08:42:30.741Z",
    ],
    interest: 2,
};

const account2 = {
    owner: "Yashika Sharma",
    password: "037",
    movements: [5000, 2000, 10000, -762, -861, 4200, 9873],
    mdates: [
        "2023-01-21T08:42:30.741Z",
        "2023-05-23T08:42:30.741Z",
        "2023-05-27T08:42:30.741Z",
        "2023-07-27T08:42:30.741Z",
        "2023-07-04T08:42:30.741Z",
        "2023-08-04T08:42:30.741Z",
        "2023-08-10T08:42:30.741Z",
        "2023-08-18T08:42:30.741Z",
    ],
    interest: 5,
};

const account3 = {
    owner: "Sneha Nautiyal",
    password: "155",
    movements: [5000, 20000, -10000, 762, -861, 42, 9873, -1287],
    mdates: [
        "2023-01-21T08:42:30.741Z",
        "2023-05-23T08:42:30.741Z",
        "2023-05-27T08:42:30.741Z",
        "2023-07-27T08:42:30.741Z",
        "2023-07-04T08:42:30.741Z",
        "2023-08-04T08:42:30.741Z",
        "2023-08-10T08:42:30.741Z",
        "2023-08-18T08:42:30.741Z",
    ],
    interest: 1.5,
};

const account4 = {
    owner: "Shreyash Singh Chauhan",
    password: "121",
    movements: [5000, -20000, 10000, 762, -861, 42, 9873, -1287],
    mdates: [
        "2023-01-21T08:42:30.741Z",
        "2023-05-23T08:42:30.741Z",
        "2023-05-27T08:42:30.741Z",
        "2023-07-27T08:42:30.741Z",
        "2023-07-04T08:42:30.741Z",
        "2023-08-04T08:42:30.741Z",
        "2023-08-10T08:42:30.741Z",
        "2023-08-18T08:42:30.741Z",
    ],
    interest: 2.5,
};

const account5 = {
    owner: "Sunny Sehwag",
    password: "147",
    movements: [5000, 20000, -10000, 762, 9873, -1287],
    mdates: [
        "2023-01-21T08:42:30.741Z",
        "2023-05-23T08:42:30.741Z",
        "2023-05-27T08:42:30.741Z",
        "2023-07-27T08:42:30.741Z",
        "2023-07-04T08:42:30.741Z",
        "2023-08-04T08:42:30.741Z",
        "2023-08-10T08:42:30.741Z",
        "2023-08-18T08:42:30.741Z",
    ],
    interest: 4.2,
};

const account6 = {
    owner: "Swarika Sharma",
    password: "118",
    movements: [5000, 20000, 10000, 11762, -861, 42, 9873, -1287],
    mdates: [
        "2023-01-21T08:42:30.741Z",
        "2023-05-23T08:42:30.741Z",
        "2023-05-27T08:42:30.741Z",
        "2023-07-27T08:42:30.741Z",
        "2023-07-04T08:42:30.741Z",
        "2023-08-04T08:42:30.741Z",
        "2023-08-10T08:42:30.741Z",
        "2023-08-18T08:42:30.741Z",
    ],
    interest: 3.6,
};

const account7 = {
    owner: "Sarthak Goyal",
    password: "144",
    movements: [-5000, -20000, -10000, -1287],
    mdates: [
        "2023-01-21T08:42:30.741Z",
        "2023-05-23T08:42:30.741Z",
        "2023-05-27T08:42:30.741Z",
        "2023-07-27T08:42:30.741Z",
        "2023-07-04T08:42:30.741Z",
        "2023-08-04T08:42:30.741Z",
        "2023-08-10T08:42:30.741Z",
        "2023-08-18T08:42:30.741Z",
    ],
    interest: 0.5,
};

const account8 = {
    owner: "Vinit Jain",
    password: "145",
    movements: [5000, 20000, -10000, 762, -861, 42, 9873, -1287],
    mdates: [
        "2023-01-21T08:42:30.741Z",
        "2023-05-23T08:42:30.741Z",
        "2023-05-27T08:42:30.741Z",
        "2023-07-27T08:42:30.741Z",
        "2023-07-04T08:42:30.741Z",
        "2023-08-04T08:42:30.741Z",
        "2023-08-10T08:42:30.741Z",
        "2023-08-18T08:42:30.741Z",
    ],
    interest: 1.8,
};

//______________________________________________________________________________

const left = document.querySelector('.left');
const headerName = document.querySelector('.headerName');
const loginUsername = document.querySelector('.inpu');
const loginPassword = document.querySelector('.inpp');
const login = document.querySelector('.go');
const currDate = document.querySelector('.currDate');
const amt = document.querySelector('.amt');
const transferTo = document.querySelector('.inputUsername');
const transferAmt = document.querySelector('.inputAmount');
const transferGo = document.querySelector('.transferGo');
const inputLoan = document.querySelector('.inputLoan');
const requestGo = document.querySelector('.requestGo');
const deleteUsername = document.querySelector('.deleteUsername');
const deletePassword = document.querySelector('.deletePassword');
const deleteGo = document.querySelector('.deleteGo');
const income = document.querySelector('.incomeAmt');
const outgo = document.querySelector('.outgoAmt');
const interestV = document.querySelector('.interestAmt');
const sort = document.querySelector('.sort');
const accounts = [account1, account2, account3, account4, account5, account6, account7, account8];

const createUserNames = function(accs) {
    accs.forEach(function (acc) {
        acc.username = acc.owner
            .toLowerCase()
            .split(' ')
            .map(name => name[0])
            .join('');
    });
};

createUserNames(accounts);

const createGlobalAmt = function(accs) {
    accs.forEach(function (accountActive) {
        accountActive.globalAmt = accountActive.movements
            .reduce((acc, curr) => acc + curr, 0);
    });
};

const init = function () {
    document.querySelector('.app').style.opacity = 0;
    loginPassword.value = '';
    loginUsername.value = '';
    loginPassword.blur();
    loginUsername.blur();
    headerName.textContent = "Nested Bank";
}

const displayError = function (s) {
    document.querySelector('.errorText').textContent = s;
    document.querySelector('.overlay').classList.remove('hidden');
    document.querySelector('.popup').classList.remove('hidden');
    document.querySelector('.popup').classList.add('popupFlex');
};

document.querySelector('.okay').addEventListener('click', function () {
    document.querySelector('.overlay').classList.add('hidden');
    document.querySelector('.popup').classList.remove('popupFlex');
    document.querySelector('.popup').classList.add('hidden');
});

document.querySelector('.overlay').addEventListener('click', function () {
    document.querySelector('.overlay').classList.add('hidden');
    document.querySelector('.popup').classList.remove('popupFlex');
    document.querySelector('.popup').classList.add('hidden');
});

const showDate = function (d) {
    const day = `${(d.getDate())}`.padStart(2,0);
    const month = `${d.getMonth() + 1}`.padStart(2,0);
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
};

const showTime = function (d) {
    const hours = `${d.getHours()}`.padStart(2, 0);
    const minutes = `${d.getMinutes()}`.padStart(2, 0);
    return `${hours}:${minutes}`;
}

const update = function (account, sorting = false) {
    document.querySelector('.app').style.opacity = 100;
    headerName.textContent = `Hello, ` + account.owner.split(' ')[0];
    const movements = (sorting) ? account.movements.slice().sort((a, b) => a - b) : account.movements;
    const dz = account.mdates;
    left.innerHTML = '';
    let x = 1;

    // UPDATING DATE
    const now = new Date();
    currDate.textContent = `As of ${showDate(now)}, ${showTime(now)}`;

    movements.forEach(function (temp, i) {

        const [neg, type] = (temp < 0) ? ["withdraw", "WITHDRAW"] : ["deposit", "DEPOSIT"];

        const html = `
            <div class = "movement">
                <div class = "${neg}">${x}. ${type}</div>
                <div class = "lastDay"> ${showDate(new Date(dz[i]))} </div>
                <div class = "movementAmt"> ${temp.toFixed(2)} $  </div>
            </div>
            `;

        left.insertAdjacentHTML('afterbegin', html);
        if (i % 2)
            document.querySelector('.movement').style.backgroundColor = "rgb(192, 192, 192)";
        else
            document.querySelector('.movement').style.backgroundColor = "white";
        x++;
    });

    // returns sum of movements
    const balance = movements.reduce((acc, curr) => acc + curr, 0);

    const calcStats = function() {
        const incomeAmt = movements
            .filter(mov => mov > 0)
            .reduce((acc, mov) => acc + mov, 0);
        income.textContent = `${(incomeAmt.toFixed(2))} $`;

        const outgoAmt = movements
            .filter(mov => mov < 0)
            .reduce((acc, mov) => acc + mov, 0);
        outgo.textContent = `${(Math.abs(outgoAmt).toFixed(2))} $`;

        const interestAmt = movements
            .filter(mov => mov > 0)
            .map(deposit => deposit * (account.interest / 100))
            .filter(int => int >= 1)
            .reduce((acc, mov) => acc + mov, 0);
        const int = +(interestAmt.toFixed(2));
        interestV.textContent = `${int.toFixed(2)} $`;
        account.globalAmt = (+(balance + int).toFixed(2));
        amt.textContent = `${account.globalAmt.toFixed(2)} $`;
    };
    calcStats();
};

let currAccount;

login.addEventListener('click', function (e) {
    //Prevents form from submitting
    e.preventDefault();

    currAccount = accounts.find(acc => (acc.username === loginUsername.value
        && acc.password === loginPassword.value));

    if (currAccount)
        update(currAccount);

    else
    {
        displayError("USERNAME OR PASSWORD IS INCORRECT...");
        init();
    }

    loginPassword.value = '';
    loginUsername.value = '';
    loginPassword.blur();
    loginUsername.blur();
});

let transferAccount;
transferGo.addEventListener('click', function (e) {
    //Prevents form from submitting
    e.preventDefault();

    transferAccount = accounts.find(acc => (acc.username === transferTo.value));

    if (!currAccount)
        displayError("YOU ARE NOT LOGGED IN");

    else {

        if (transferAccount) {
            if (transferAccount === currAccount)
                displayError("YOU CANT TRANSFER TO YOURSELF");
            else {
                if (transferAmt.value) {
                    if (transferAmt.value > currAccount.globalAmt)
                        displayError("YOU DONT HAVE ENOUGH BALANCE");
                    else if ((transferAmt.value < 0))
                        displayError("NEGATIVE TRANSFER AMOUNT IS INVALID");
                    else if ((transferAmt.value == 0))
                        displayError("ZERO TRANSFER AMOUNT IS INVALID");
                    else
                    {
                        currAccount.movements.push(-Number(transferAmt.value));
                        transferAccount.movements.push(Number(transferAmt.value));
                        currAccount.mdates.push(new Date().toISOString());
                        transferAccount.mdates.push(new Date().toISOString());
                        update(currAccount);
                    }
                }
            }
        }

        else
            displayError("USER DOES NOT EXIST");

        transferAmt.value = '';
        transferTo.value = '';
        transferAmt.blur();
        transferTo.blur();
    }
});

const valid = function (deposits) {
    let mx = 0;
    deposits.forEach(function (i) {
        mx = Math.max(mx, i);
    });
    return mx;
};

requestGo.addEventListener('click', function (e) {
    //Prevents form from submitting
    e.preventDefault();

    const loan = Math.ceil(inputLoan.value);
    if (!currAccount)
        displayError("YOU ARE NOT LOGGED IN");

    else {
        if (loan) {
            if (loan <= 0)
                displayError("INVALID LOAN REQUEST");
            else if (valid(currAccount.movements) * 3 === 0)
                displayError("WE CAN NOT GIVE YOU LOAN");
            else if (loan > (valid(currAccount.movements) * 3))
                displayError(`YOUR ACCOUNT CAN GET A LOAN OF ${valid(currAccount.movements) * 3} $ AT MAX.`);
            else
            {
                currAccount.movements.push(Number(loan));
                currAccount.mdates.push(new Date().toISOString());
                update(currAccount);
            }
        }
        else
            displayError("INVALID LOAN REQUEST");
    }
    inputLoan.value = '';
    inputLoan.blur();   
});

deleteGo.addEventListener('click', function (e) {
    //Prevents form from submitting
    e.preventDefault();

    const deleteAccount = deleteUsername.value;
    const deletePin = deletePassword.value;

    if (!currAccount)
        displayError("YOU ARE NOT LOGGED IN");

    else {
        if (deleteAccount) {
            if (deleteAccount === currAccount.username)
            {
                if (deletePin === currAccount.password) {
                    const index = accounts.findIndex(acc => acc.username === currAccount.username);
                    accounts.splice(index, 1);
                    displayError("ACCOUNT CLOSED SUCCESSFULLY");
                    console.log(accounts);
                    init();
                }
                else
                    displayError("INCORRECT PASSWORD");
            }
            else
                displayError("YOU CAN ONLY REQUEST TO CLOSE YOUR ACCOUNT")
        }
        else
            displayError("INVALID USERNAME");
    }
    deleteUsername.value = '';
    deleteUsername.blur();   
    deletePassword.value = '';
    deletePassword.blur();   
});

let sortState = false;
sort.addEventListener('click', function (e) {
    e.preventDefault();

    if (!currAccount)
        displayError("YOU ARE NOT LOGGED IN");

    else
    {
        update(currAccount, !sortState);
        sortState = !sortState;
    }
})