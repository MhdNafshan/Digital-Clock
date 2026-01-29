 
        const hoursEl = document.getElementById("hours");
        const minsEl = document.getElementById("mins");
        const secsEl = document.getElementById("seconds");
        const ampmEl = document.getElementById("ampm");
        const dateEl = document.getElementById("date");

        const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

        function padZero(num){
            return num < 10 ? "0" + num : num;
        }

        function displayTime(){
            let now = new Date();

            let hr = now.getHours();
            let min = now.getMinutes();
            let sec = now.getSeconds();

            // AM / PM logic
            if(hr >= 12){
                ampmEl.textContent = "PM";
            } else {
                ampmEl.textContent = "AM";
            }

            hr = hr % 12;
            hr = hr ? hr : 12; // 0 becomes 12

            hoursEl.textContent = padZero(hr);
            minsEl.textContent = padZero(min);
            secsEl.textContent = padZero(sec);

            // Date
            let day = days[now.getDay()];
            let date = now.getDate();
            let month = now.getMonth() + 1;
            let year = now.getFullYear();

            dateEl.textContent = `${day} - ${padZero(date)}/${padZero(month)}/${year}`;

            // Background change (day / night)
            if(now.getHours() >= 6 && now.getHours() < 18){
                document.body.style.background = "#2c3e50";
            } else {
                document.body.style.background = "#1c1c3c";
            }
        }

        displayTime();
        setInterval(displayTime,1000);
    