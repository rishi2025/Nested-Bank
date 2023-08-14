// data
//______________________________________________________________________________
const account1 = {
    owner: "Rishi Jha",
    password: "137",
    movements: [5000, 20000, -10000, 762, -861, 42, 9873, -1287],
    interest: 2,
};

const account2 = {
    owner: "Yashika Sharma",
    password: "037",
    movements: [5000, 2000, 10000, -762, -861, 4200, 9873],
    interest: 5,
};

const account3 = {
    owner: "Sneha Nautiyal",
    password: "155",
    movements: [5000, 20000, -10000, 762, -861, 42, 9873, -1287],
    interest: 1.5,
};

const account4 = {
    owner: "Shreyash Singh Chauhan",
    password: "121",
    movements: [5000, -20000, 10000, 762, -861, 42, 9873, -1287],
    interest: 2.5,
};

const account5 = {
    owner: "Sunny Sehwag",
    password: "147",
    movements: [5000, 20000, -10000, 762, 9873, -1287],
    interest: 4.2,
};

const account6 = {
    owner: "Swarika Sharma",
    password: "118",
    movements: [5000, 20000, 10000, 11762, -861, 42, 9873, -1287],
    interest: 3.6,
};

const account7 = {
    owner: "Sarthak Goyal",
    password: "144",
    movements: [-5000, -20000, -10000, -1287],
    interest: 0.5,
};

const account8 = {
    owner: "Vinit Jain",
    password: "145",
    movements: [5000, 20000, -10000, 762, -861, 42, 9873, -1287],
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
const inputLoan = document.querySelector('.inputLoan');
const requestGo = document.querySelector('.requestGo');
const deleteUsername = document.querySelector('.deleteUsername');
const deletePassword = document.querySelector('.deletePassword');
const income = document.querySelector('.incomeAmt');
const outgo = document.querySelector('.outgoAmt');
const interestV = document.querySelector('.interestAmt');
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

const update = function (account) {
    document.querySelector('.app').style.opacity = 100;
    headerName.textContent = `Hello, ` + account.owner.split(' ')[0];
    const movements = account.movements;
    left.innerHTML = '';
    let x = 1;
    movements.forEach(function (temp, i) {

        const [neg, type] = (temp < 0) ? ["withdraw", "WITHDRAW"] : ["deposit", "DEPOSIT"];

        const html = `
            <div class = "movement">
                <div class = "${neg}">${x}. ${type}</div>
                <div class = "lastDay"> 3 days ago </div>
                <div class = "movementAmt"> ${temp} $  </div>
            </div>
            `;

        left.insertAdjacentHTML('afterbegin', html);
        x++;
    });

    // returns sum of movements
    const balance = movements.reduce((acc, curr) => acc + curr, 0);
    amt.textContent = `${balance} $`;

    const calcStats = function() {
        const incomeAmt = movements
            .filter(mov => mov > 0)
            .reduce((acc, mov) => acc + mov, 0);
        income.textContent = `${incomeAmt} $`;

        const outgoAmt = movements
            .filter(mov => mov < 0)
            .reduce((acc, mov) => acc + mov, 0);
        outgo.textContent = `${Math.abs(outgoAmt)} $`;

        const interestAmt = movements
            .filter(mov => mov > 0)
            .map(deposit => deposit * (account.interest / 100))
            .filter(int => int >= 1)
            .reduce((acc, mov) => acc + mov, 0);
        const int = Math.trunc(interestAmt);
        interestV.textContent = `${ int + (Math.trunc((interestAmt - int) * 100)) / 100} $`;
    };
    calcStats();
};

let currAccount;

login.addEventListener('click', function (e) {
    //Prevents form from submitting
    e.preventDefault();

    currAccount = accounts.find(acc => (acc.username === loginUsername.value
        && acc.password === loginPassword.value));

    console.log(currAccount);
    console.log(loginPassword);

    if (currAccount)
        update(currAccount);

    else
    {
        console.log("MODAL WINDOW");
        // TO BE DONE IN FUTURE
    }

    loginPassword.value = '';
    loginUsername.value = '';

});