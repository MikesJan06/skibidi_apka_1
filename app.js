
        function calculate() {
            var num1 = parseFloat(document.getElementById('num1').value); // Načte první číslo z prvního vstupního pole
            var operator = document.getElementById('operator').value; // Načte operátor ze select boxu
            var num2 = parseFloat(document.getElementById('num2').value); // Načte druhé číslo z druhého vstupního pole
            var result; // Proměnná pro výsledek

            // Pokud jsou zadaná čísla neplatná, zobrazí varování
            if (isNaN(num1) || isNaN(num2)) {
                result = 'Zadejte platná čísla';
            } else {
                // Podle zvoleného operátoru provede příslušnou matematickou operaci
                switch (operator) {
                    case '+':
                        result = num1 + num2; // Sčítání
                        break;
                    case '-':
                        result = num1 - num2; // Odčítání
                        break;
                    case '*':
                        result = num1 * num2; // Násobení
                        break;
                    case '/':
                        result = num2 !== 0 ? num1 / num2 : 'Nulou nelze dělit'; // Dělení (kontrola dělení nulou)
                        break;
                    default:
                        result = 'Neplatný operátor'; // Zobrazení chyby, pokud operátor není platný
                }
            }

            // Zobrazení výsledku ve stránce
            document.getElementById('result').innerText = 'Výsledek: ' + result;
        }
