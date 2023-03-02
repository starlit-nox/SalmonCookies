`use strict`

    function getRandom(max, min) {
        return Math.random() * (max - min) + min;
        // 0 >= random # <=1 * limit
    }

// seattle sales
    const seattle = {
        min: 23,
        max: 65,
        avg: 6.3,
        location: `Seattle`,
        hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
        customersPerHour: function() {
            console.log(this.max);
            console.log(this.min);
            return getRandom(this.max, this.min);
        },
        cookiesPerHour: [],
        getCookies: function() {
            for(let i=0; i < this.hoursOfOperation.length; i++) {
                console.log(`seattle avg cookies/sale`, this.avg);
                console.log(`seattle avg customers/hour`, this.customersPerHour());
                this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
            }
            return this.cookiesPerHour;
        }
    }
    // let hoursDemoSeattle = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
    // let cookieDemoSeattle = [152,265,202,353,227,221,202,378,171,309,215,189,189,385];
    seattle.getCookies();
    let hoursArraySeattle = document.querySelector('.output1')
    for(let i = 0; i < seattle.hoursOfOperation.length; i++) {
        //hoursDemo[i].innerHTML
        let variable = document.createElement("ul");
        variable.innerHTML = `${seattle.hoursOfOperation[i]}: ${seattle.cookiesPerHour[i]} cookies`;
        hoursArraySeattle.append(variable);
    }
// tokyo sales 
    const tokyo = {
        min: 3,
        max: 24,
        avg: 1.2,
        location: `Tokyo`,
        hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
        customersPerHour: function() {
            console.log(this.max);
            console.log(this.min);
            return getRandom(this.max, this.min);
        },
        cookiesPerHour: [], 
        getCookies: function() {
            for(let i=0; i < this.hoursOfOperation.length; i++) {
                console.log(`tokyo avg cookies/sale`, this.avg)
                console.log(`tokyo avg custoemrs/hours`, this.customersPerHour());
                this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
            }
            return this.cookiesPerHour;
        }, 
    }
    // let hoursDemoTokyo = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
    // // let cookieDemoTokyo = [26, 27, 8, 5, 24, 10, 9, 6, 17, 15, 16, 18, 8, 19];
    tokyo.getCookies();
    let hoursArrayTokyo = document.querySelector('.output2')
    // console.log("hoursArrayTokyo", hoursArrayTokyo)
    for(let i = 0; i < tokyo.hoursOfOperation.length; i++) {
        let variable = document.createElement("ul");
        variable.innerHTML = `${tokyo.hoursOfOperation[i]}: ${tokyo.cookiesPerHour[i]} cookies`;
        // console.log(`${hoursDemoTokyo[1]}: ${cookieDemoTokyo[1]} cookies`)
        hoursArrayTokyo.append(variable);
    }
// dubai sales
    const dubai = {
        min: 11,
        max: 38,
        avg: 3.7, 
        location: `Dubai`,
        hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
        customersPerHour: function() {
            console.log(this.max);
            console.log(this.min);
            return getRandom(this.max, this.min);
        },
        cookiesPerHour: [], 
        getCookies: function() {
            for(let i=0; i < this.hoursOfOperation.length; i++) {
                console.log(`tokyo avg cookies/sale`, this.avg)
                console.log(`tokyo avg custoemrs/hours`, this.customersPerHour());
                this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
            }
            return this.cookiesPerHour;
        }, 
    }
    // let hoursDemoDubai = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
    // let cookieDemoDubai = [77, 122, 74, 74, 100, 127, 120, 138, 108, 85, 120, 79, 115, 44];
    dubai.getCookies();
    let hoursArrayDubai = document.querySelector('.output3')
    // for(let i=0; i < this.hoursOfOperation.length; i++) {
    for(let i = 0; i < dubai.hoursOfOperation.length; i++) {
        let variable = document.createElement("ul");
        variable.innerHTML = `${dubai.hoursOfOperation[i]}: ${dubai.cookiesPerHour[i]} cookies`;
        // console.log(`${hoursDemoDubai[1]}: ${cookieDemoDubai[1]} cookies`)
        hoursArrayDubai.append(variable);
    }
// paris sales
    const paris = {
        min: 20,
        max: 38,
        avg: 2.3,
        location: `Paris`,
        hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
        customersPerHour: function() {
            console.log(this.max);
            console.log(this.min);
            return getRandom(this.max, this.min);
        },
        cookiesPerHour: [], 
        getCookies: function() {
            for(let i=0; i < this.hoursOfOperation.length; i++) {
                console.log(`tokyo avg cookies/sale`, this.avg)
                console.log(`tokyo avg custoemrs/hours`, this.customersPerHour());
                this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
            }
            return this.cookiesPerHour;
        }, 
    }
    // let hoursDemoParis = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
    // let cookieDemoParis = [80, 58, 85, 72, 78, 85, 56, 80, 67, 51, 85, 83, 66, 80];
    paris.getCookies();
    let hoursArrayParis = document.querySelector('.output4')
    for(let i=0; i < paris.hoursOfOperation.length; i++) {
        let variable = document.createElement("ul");
        variable.innerHTML = `${paris.hoursOfOperation[i]}: ${paris.cookiesPerHour[i]} cookies`;
        // console.log(`${hoursDemoParis[1]}: ${cookieDemoParis[1]} cookies`)
        hoursArrayParis.append(variable);
    }
// lima sales
    const lima = {
        min: 2,
        max: 16,
        avg: 4.6, 
        location: `Lima`,
        hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
        customersPerHour: function() {
            console.log(this.max);
            console.log(this.min);
            return getRandom(this.max, this.min);
        },
        cookiesPerHour: [], 
        getCookies: function() {
            for(let i=0; i < lima.hoursOfOperation.length; i++) {
                console.log(`tokyo avg cookies/sale`, this.avg)
                console.log(`tokyo avg custoemrs/hours`, this.customersPerHour());
                this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
            }
            return this.cookiesPerHour;
        }, 
    }
    // let hoursDemoLima = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
    // let cookieDemoLima = [28, 28, 68, 61, 58, 37, 61, 45, 63, 71, 30, 37, 25, 54];
    lima.getCookies();
    let hoursArrayLima = document.querySelector('.output5')
    for(let i = 0; i < paris.hoursOfOperation.length; i++) {
        let variable = document.createElement("ul");
        variable.innerHTML = `${lima.hoursOfOperation[i]}: ${lima.cookiesPerHour[i]} cookies`;
        // console.log(`${hoursDemoLima[1]}: ${cookieDemoLima[1]} cookies`)
        hoursArrayLima.append(variable);
    }