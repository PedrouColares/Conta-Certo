document.addEventListener('DOMContentLoaded', function() {
    const quizContainer = document.getElementById('quiz-container');
    const submitButton = document.getElementById('submit-quiz');
    const questions = quizContainer.querySelectorAll('.question');
    let userAnswers = new Array(questions.length).fill(null);

    const sortableList = document.getElementById('sortable-items');
    if (sortableList) {
        new Sortable(sortableList, {
            animation: 150,
            ghostClass: 'bg-blue-100'
        });
    }

    questions.forEach((question, index) => {
        const buttons = question.querySelectorAll('button');
        buttons.forEach((button, buttonIndex) => {
            button.addEventListener('click', () => {
                buttons.forEach(b => {
                    b.classList.remove('bg-green-500', 'selected');
                    b.classList.add('bg-white');
                });
                button.classList.remove('bg-white');
                button.classList.add('bg-green-500', 'selected');
                userAnswers[index] = buttonIndex;
            });
        });
    });

    submitButton.addEventListener('click', () => {
        const allAnswered = userAnswers.every((answer, index) => {
            return index === 3 || answer !== null;
        });

        if (!allAnswered) {
            alert('Por favor, responda todas as perguntas antes de enviar.');
            return;
        }

        let score = 0;
        questions.forEach((question, index) => {
            if (index === 3) {
                // Handle the sorting question
                const sortedItems = Array.from(sortableList.children);
                const sortedPrices = sortedItems.map(item => parseFloat(item.dataset.price));
                const isCorrectOrder = sortedPrices.every((price, i) => 
                    i === 0 || price <= sortedPrices[i - 1]
                );
                if (isCorrectOrder) score++;
            } else {
                const correctAnswer = question.querySelector('[resposta-correta]');
                if (correctAnswer) {
                    const buttons = question.querySelectorAll('button');
                    const userAnswerButton = buttons[userAnswers[index]];
                    if (userAnswerButton === correctAnswer) {
                        score++;
                    }
                }
            }
        });

        const totalQuestions = questions.length;
        alert(`Você acertou ${score} de ${totalQuestions} questões!`);

        showResults(userAnswers, score);
    });

    function showResults(answers, score) {
        questions.forEach((question, index) => {
            if (index === 3) {
                const sortedItems = Array.from(sortableList.children);
                const sortedPrices = sortedItems.map(item => parseFloat(item.dataset.price));
                const isCorrectOrder = sortedPrices.every((price, i) => 
                    i === 0 || price <= sortedPrices[i - 1]
                );
                
                if (isCorrectOrder) {
                    sortableList.classList.add('border-green-500', 'border-2');
                } else {
                    sortableList.classList.add('border-red-500', 'border-2');
                }

                Sortable.get(sortableList).option("disabled", true);
            } else {
                const buttons = question.querySelectorAll('button');
                buttons.forEach(button => {
                    if (button.hasAttribute('resposta-correta')) {
                        button.classList.remove('bg-white');
                        button.classList.add('bg-green-500');
                    } else {
                        button.classList.remove('bg-green-500', 'bg-white');
                        button.classList.add('bg-gray-200');
                    }
                    button.disabled = true;
                });

                if (answers[index] !== null) {
                    const userAnswerButton = buttons[answers[index]];
                    if (!userAnswerButton.hasAttribute('resposta-correta')) {
                        userAnswerButton.classList.remove('bg-gray-200');
                        userAnswerButton.classList.add('bg-red-500');
                    }
                }
            }
        });

        const scoreElement = document.createElement('div');
        scoreElement.textContent = `Pontuação final: ${score} de ${questions.length}`;
        scoreElement.className = 'text-xl font-bold text-center mt-8';
        quizContainer.appendChild(scoreElement);

        submitButton.disabled = true;
        submitButton.classList.add('opacity-50', 'cursor-not-allowed');
    }
});