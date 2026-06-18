const inputvalue = document.getElementById("user-input");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach((btn) => {

    btn.addEventListener("click", () => {

        const value = btn.innerText;

        // AC
        if (value === "AC") {
            expression = "";
            inputvalue.innerText = "0";
            return;
        }

        // Delete
        if (value === "Del") {
            expression = expression.slice(0, -1);
            inputvalue.innerText = expression || "0";
            return;
        }

        // Equal
        if (value === "=") {

            try {

                let exp = expression;

                // π
                exp = exp.replace(/π/g, Math.PI);

                // √x  => √25 = 5
                
while (/√(\d+(\.\d+)?)/.test(exp)) {
    exp = exp.replace(
        /√(\d+(\.\d+)?)/,
        (_, num) => Math.sqrt(Number(num))
    );
}

                // xʸ  => 2xʸ3 = 8
                while (/(\d+(\.\d+)?)\^(\d+(\.\d+)?)/.test(exp)) {
    exp = exp.replace(
        /(\d+(\.\d+)?)\^(\d+(\.\d+)?)/,
        (_, a, __, b) => Math.pow(Number(a), Number(b))
    );
}

                // Percentage
                // 200%10 = 20
                while (/(\d+(\.\d+)?)%(\d+(\.\d+)?)/.test(exp)) {
                    exp = exp.replace(
                        /(\d+(\.\d+)?)%(\d+(\.\d+)?)/,
                        (_, a, __, b) => (Number(a) * Number(b)) / 100
                    );
                }

                expression = eval(exp).toString();

                inputvalue.innerText = expression;

            } catch {

                expression = "";
                inputvalue.innerText = "Error";

            }

            return;
        }

        // Display symbols
        if (value === "π") {
            expression += "π";
        }

        else if (value === "√") {
            expression += "√";
            inputvalue.innerText = expression;
    return;
        }

        else if (value === "^") {

    // Agar expression khaali hai to kuch mat karo
    if (expression.length === 0) return;

    // Display me sirf ^ dikhayega
    expression += "^";
}

        else {
            expression += value;
        }

        inputvalue.innerText = expression;

    });

});