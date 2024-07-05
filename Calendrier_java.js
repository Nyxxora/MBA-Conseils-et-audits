document.addEventListener("DOMContentLoaded", function() {
    const monthYearElement = document.getElementById('month-year');
    const calendarDaysElement = document.getElementById('calendar-days');
    const contactForm = document.getElementById('contact-form');

    const today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();

    showCalendar(currentMonth, currentYear);

    // Gestionnaire d'événement pour la flèche précédente
    document.getElementById('prev-month').addEventListener('click', function() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        showCalendar(currentMonth, currentYear);
    });

    // Gestionnaire d'événement pour la flèche suivante
    document.getElementById('next-month').addEventListener('click', function() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        showCalendar(currentMonth, currentYear);
    });

    // Gestionnaire d'événement pour la soumission du formulaire
    contactForm.addEventListener('submit', function(event) {
        // Vérifier si les champs obligatoires sont remplis avant de soumettre
        if (!contactForm.nom.value || !contactForm.prenom.value || !contactForm.telephone.value || !contactForm.heure.value) {
            alert('Veuillez remplir tous les champs obligatoires.');
            event.preventDefault(); // Empêcher la soumission du formulaire
        } else {
            // Récupérer les valeurs du formulaire pour traitement
            const nom = contactForm.nom.value;
            const prenom = contactForm.prenom.value;
            const telephone = contactForm.telephone.value;
            const heure = contactForm.heure.value;

            // Exemple d'action avec les données récupérées
            console.log(`Nom: ${nom}, Prénom: ${prenom}, Téléphone: ${telephone}, Heure: ${heure}`);
            // Ici, vous pouvez envoyer les données à votre backend ou effectuer d'autres actions nécessaires
        }
    });

    function showCalendar(month, year) {
        calendarDaysElement.innerHTML = '';

        const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
        monthYearElement.textContent = months[month] + ' ' + year;

        const firstDay = new Date(year, month, 1);
        const startingDay = firstDay.getDay(); // 0 = dimanche, 1 = lundi, ...

        const daysInMonth = new Date(year, month + 1, 0).getDate();

        let dayCounter = 1;
        for (let i = 0; i < 42; i++) { // 42 = nombre maximum de cellules (6 semaines * 7 jours)
            const dayElement = document.createElement('div');
            if (i >= startingDay && dayCounter <= daysInMonth) {
                dayElement.textContent = dayCounter;
                dayCounter++;
            }
            dayElement.classList.add('calendar-day');
            calendarDaysElement.appendChild(dayElement);
        }
    }
});
