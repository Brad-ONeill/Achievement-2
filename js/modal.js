	function showModal() {
		var $modalContainer = document.querySelector('#modal-container');
		$modalContainer.classList.add('is-visible');
	}

	function hideModal() {
		var $modalContainer = document.querySelector('#modal-container');
		$modalContainer.classList.remove('is-visible');
	}

	//modal IFFE
	document.querySelector('#modal-button').addEventListener('click', () => {
		showModal();
	});

	//-- show modal --
	function showModal(title, text) {
		var $modalContainer = document.querySelector('#modal-container');
		$modalContainer.innerHTML = '';

		var modal = document.createElement('div');
		modal.classList.add('modal');

		var closeButtonElement = document.createElement('button');
		closeButtonElement.classList.add('modal-close');
		closeButtonElement.innerHTML = "&times;";
		closeButtonElement.addEventListener('click', hideModal);

		var titleElement = document.createElement('h1');
		titleElement.innerText = title;

		var contentElement = document.createElement('p');
		contentElement.innerText = text;

		modal.appendChild(closeButtonElement);
		modal.appendChild(titleElement);
		modal.appendChild(contentElement);
		$modalContainer.appendChild(modal);

		$modalContainer.classList.add('is-visible');
	};

	document.querySelector('#modal-button').addEventListener('click', () => {
		showModal('PokéMon', 'Here is all of the info about your PokéMon');
	});

	window.addEventListener('keydown', (e) => {
		var $modalContainer = document.querySelector('#modal-container');
		if (e.key === 'Escape' && $modalContainer.classList.contains('is-visible')) {
			hideModal();
		}
	});

	$modalContainer.addEventListener('click', (e) => {
		var target = e.target;
		if (target === $modalContainer) {
			hideModal();
		}
	});
