<script>
        var flag = 1, flag2 = 1;
        function checkpsw(elem) {
            if (elem.value.length < 8) {
                document.getElementById('pswo').innerText = "Must be 8 characters at least";
            }

            else {
                document.getElementById('pswo').innerText = "";
            }
            if (elem.value.indexOf(' ') !== -1) {
                document.getElementById('white').innerText = "Must not contain White Spaces";
                flag2 = 0;
            }
            else {
                document.getElementById('white').innerText = " ";
                flag2 = 1;
            }


        }
        var password = document.getElementById('psw');
        function check(elem) {

            if (elem.value.length > 0) {
                if (elem.value != password.value) {
                    document.getElementById('alert').innerText = "Confirm Password does match";
                    flag = 0
                }
                else {
                    document.getElementById('alert').innerText = "";
                    flag = 1
                }

            }
            else {
                document.getElementById('alert').innerText = "Please Enter Confirm Password";
                flag = 0;
            }

        }
        function valiation() {
            if (flag == 1) {
                alert("Your Data has been submitted successfully\nyou now have an account on our website..\nCongratulations !\n\n >>please , Press Ok to return to our Home page<<");
                return true;
            }

            else
                return false;
        }
        function checkfname(elem) {
            if (elem.value.length < 3) {
                document.getElementById('fname').innerText = "Must be 3 characters at least";
            }
            else {
                document.getElementById('fname').innerText = "";
            }
        }
        function checklname(elem) {
            if (elem.value.length < 3) {
                document.getElementById('lname').innerText = "Must be 3 characters at least";
            }
            else {
                document.getElementById('lname').innerText = "";
            }
        }
        function checkphone(elem) {
            if (elem.value.length != 11) {
                document.getElementById('tel').innerText = "Type only digits(not any character or special case character) and your number must begin with 01 and can be only 11 digits";
            }
            else {
                document.getElementById('tel').innerText = "";
            }
        }
        function checkaddress(elem) {
            if (elem.value.length < 12) {
                document.getElementById('adrs').innerText = "Must be 12 characters at least";
                        }
            else {
                document.getElementById('adrs').innerText = "";
            }
        }


    </script>