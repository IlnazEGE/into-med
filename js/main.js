
let iconMenu = document.querySelector(".menu-header__icon");
let body = document.querySelector("body");
let menuBody = document.querySelector(".menu-header__body");
if (iconMenu) {
	iconMenu.addEventListener("click", function () {
		iconMenu.classList.toggle("active");
		body.classList.toggle("lock");
		menuBody.classList.toggle("active");
	});
}

ymaps.ready(function () {
	var myMap = new ymaps.Map('map', {
		center: [55.52997450593547, 37.443087414184944],
		zoom: 12
	}, {
		searchControlProvider: 'yandex#search'
	}),

		// Создаём макет содержимого.
		MyIconContentLayout = ymaps.templateLayoutFactory.createClass(`<div>$[properties.iconContent]</div>`),


		Placemark_1 = new ymaps.Placemark([55.479989, 37.387581], {
			hintContent: 'ул. Школьная 26',
			balloonContent: `<div style="display: flex; border-radius: 5px; font-family: 'GraphikLCG'; font-size: 20px; line-height: 150%;	letter-spacing: -0.02em; color: #000000;"><img src="img/icons/balloon.png" alt=""><div style="padding: 6px 3px 0 10px;">ул. Школьная 26</div></div>`,
			iconContent: ''
		}, {
			// Опции.
			// Необходимо указать данный тип макета.
			iconLayout: 'default#imageWithContent',
			// Своё изображение иконки метки.
			iconImageHref: 'img/icons/loc.png',
			// Размеры метки.
			iconImageSize: [110, 142],
			// Смещение левого верхнего угла иконки относительно
			// её "ножки" (точки привязки).
			iconImageOffset: [-24, -24],
			// Смещение слоя с содержимым относительно слоя с картинкой.
			iconContentOffset: [15, 15],
			// Макет содержимого.
			iconContentLayout: MyIconContentLayout
		});

	Placemark_2 = new ymaps.Placemark([55.464624, 37.358193], {
		hintContent: 'ул. Власьевская',
		balloonContent: `<div style="display: flex; border-radius: 5px; font-family: 'GraphikLCG'; font-size: 20px; line-height: 150%;	letter-spacing: -0.02em; color: #000000;"><img src="img/icons/balloon.png" alt=""><div style="padding: 6px 3px 0 10px;">ул. Власьевская</div></div>`,
		iconContent: ''
	}, {
		// Опции.
		// Необходимо указать данный тип макета.
		iconLayout: 'default#imageWithContent',
		// Своё изображение иконки метки.
		iconImageHref: 'img/icons/loc.png',
		// Размеры метки.
		iconImageSize: [110, 142],
		// Смещение левого верхнего угла иконки относительно
		// её "ножки" (точки привязки).
		iconImageOffset: [-24, -24],
		// Смещение слоя с содержимым относительно слоя с картинкой.
		iconContentOffset: [15, 15],
		// Макет содержимого.
		iconContentLayout: MyIconContentLayout
	});

	Placemark_3 = new ymaps.Placemark([55.609563, 37.205569], {
		hintContent: 'ул. Маяковского 10',
		balloonContent: `<div style="display: flex; border-radius: 5px; font-family: 'GraphikLCG'; font-size: 20px; line-height: 150%;	letter-spacing: -0.02em; color: #000000;"><img src="img/icons/balloon.png" alt=""><div style="padding: 6px 3px 0 10px;">ул. Маяковского 10</div></div>`,
		iconContent: ''
	}, {
		// Опции.
		// Необходимо указать данный тип макета.
		iconLayout: 'default#imageWithContent',
		// Своё изображение иконки метки.
		iconImageHref: 'img/icons/loc.png',
		// Размеры метки.
		iconImageSize: [110, 142],
		// Смещение левого верхнего угла иконки относительно
		// её "ножки" (точки привязки).
		iconImageOffset: [-24, -24],
		// Смещение слоя с содержимым относительно слоя с картинкой.
		iconContentOffset: [15, 15],
		// Макет содержимого.
		iconContentLayout: MyIconContentLayout
	});

	Placemark_4 = new ymaps.Placemark([55.622868, 37.666315], {
		hintContent: 'ул. Солнечная 20',
		balloonContent: `<div style="display: flex; border-radius: 5px; font-family: 'GraphikLCG'; font-size: 20px; line-height: 150%;	letter-spacing: -0.02em; color: #000000;"><img src="img/icons/balloon.png" alt=""><div style="padding: 6px 3px 0 10px;">ул. Солнечная 20</div></div>`,
		iconContent: ''
	}, {
		// Опции.
		// Необходимо указать данный тип макета.
		iconLayout: 'default#imageWithContent',
		// Своё изображение иконки метки.
		iconImageHref: 'img/icons/loc.png',
		// Размеры метки.
		iconImageSize: [110, 142],
		// Смещение левого верхнего угла иконки относительно
		// её "ножки" (точки привязки).
		iconImageOffset: [-24, -24],
		// Смещение слоя с содержимым относительно слоя с картинкой.
		iconContentOffset: [15, 15],
		// Макет содержимого.
		iconContentLayout: MyIconContentLayout
	});

	Placemark_5 = new ymaps.Placemark([55.493313, 37.53367], {
		hintContent: 'ул. Весенняя 6',
		balloonContent: `<div style="display: flex; border-radius: 5px; font-family: 'GraphikLCG'; font-size: 20px; line-height: 150%;	letter-spacing: -0.02em; color: #000000;"><img src="img/icons/balloon.png" alt=""><div style="padding: 6px 3px 0 10px;">ул. Весенняя 6</div></div>`,
		iconContent: ''
	}, {
		// Опции.
		// Необходимо указать данный тип макета.
		iconLayout: 'default#imageWithContent',
		// Своё изображение иконки метки.
		iconImageHref: 'img/icons/loc.png',
		// Размеры метки.
		iconImageSize: [110, 142],
		// Смещение левого верхнего угла иконки относительно
		// её "ножки" (точки привязки).
		iconImageOffset: [-24, -24],
		// Смещение слоя с содержимым относительно слоя с картинкой.
		iconContentOffset: [15, 15],
		// Макет содержимого.
		iconContentLayout: MyIconContentLayout
	});

	Placemark_5 = new ymaps.Placemark([55.52207570409175, 37.418354206393545], {
		hintContent: 'ул. Кустодиева 8',
		balloonContent: `<div style="display: flex; border-radius: 5px; font-family: 'GraphikLCG'; font-size: 20px; line-height: 150%;	letter-spacing: -0.02em; color: #000000;"><img src="img/icons/balloon.png" alt=""><div style="padding: 6px 3px 0 10px;">ул. Кустодиева 8</div></div>`,
		iconContent: ''
	}, {
		// Опции.
		// Необходимо указать данный тип макета.
		iconLayout: 'default#imageWithContent',
		// Своё изображение иконки метки.
		iconImageHref: 'img/icons/loc.png',
		// Размеры метки.
		iconImageSize: [110, 142],
		// Смещение левого верхнего угла иконки относительно
		// её "ножки" (точки привязки).
		iconImageOffset: [-24, -24],
		// Смещение слоя с содержимым относительно слоя с картинкой.
		iconContentOffset: [15, 15],
		// Макет содержимого.
		iconContentLayout: MyIconContentLayout
	});

	Placemark_6 = new ymaps.Placemark([55.52207570409175, 37.418354206393545], {
		hintContent: 'ул. Спортивная 23',
		balloonContent: `<div style="display: flex; border-radius: 5px; font-family: 'GraphikLCG'; font-size: 20px; line-height: 150%;	letter-spacing: -0.02em; color: #000000;"><img src="img/icons/balloon.png" alt=""><div style="padding: 6px 3px 0 10px;">ул. Спортивная 23</div></div>`,
		iconContent: ''
	}, {
		// Опции.
		// Необходимо указать данный тип макета.
		iconLayout: 'default#imageWithContent',
		// Своё изображение иконки метки.
		iconImageHref: 'img/icons/loc.png',
		// Размеры метки.
		iconImageSize: [110, 142],
		// Смещение левого верхнего угла иконки относительно
		// её "ножки" (точки привязки).
		iconImageOffset: [-24, -24],
		// Смещение слоя с содержимым относительно слоя с картинкой.
		iconContentOffset: [15, 15],
		// Макет содержимого.
		iconContentLayout: MyIconContentLayout
	});

	Placemark_7 = new ymaps.Placemark([55.52997450593547, 37.443087414184944], {
		hintContent: 'ул. Воскресенское 27',
		balloonContent: `<div style="display: flex; border-radius: 5px; font-family: 'GraphikLCG'; font-size: 20px; line-height: 150%;	letter-spacing: -0.02em; color: #000000;"><img src="img/icons/balloon.png" alt=""><div style="padding: 6px 3px 0 10px;">ул. Воскресенское 27</div></div>`,
		iconContent: ''
	}, {
		// Опции.
		// Необходимо указать данный тип макета.
		iconLayout: 'default#imageWithContent',
		// Своё изображение иконки метки.
		iconImageHref: 'img/icons/loc.png',
		// Размеры метки.
		iconImageSize: [110, 142],
		// Смещение левого верхнего угла иконки относительно
		// её "ножки" (точки привязки).
		iconImageOffset: [-24, -24],
		// Смещение слоя с содержимым относительно слоя с картинкой.
		iconContentOffset: [15, 15],
		// Макет содержимого.
		iconContentLayout: MyIconContentLayout
	});
	Placemark_8 = new ymaps.Placemark([55.52997450593547, 37.443087414184944], {
		hintContent: 'Щербинка',
		balloonContent: `<div style="display: flex; border-radius: 5px; font-family: 'GraphikLCG'; font-size: 20px; line-height: 150%;	letter-spacing: -0.02em; color: #000000;"><img src="img/icons/balloon.png" alt=""><div style="padding: 6px 3px 0 10px;">ул. Щербинка</div></div>`,
		iconContent: ''
	}, {
		// Опции.
		// Необходимо указать данный тип макета.
		iconLayout: 'default#imageWithContent',
		// Своё изображение иконки метки.
		iconImageHref: 'img/icons/loc.png',
		// Размеры метки.
		iconImageSize: [110, 142],
		// Смещение левого верхнего угла иконки относительно
		// её "ножки" (точки привязки).
		iconImageOffset: [-24, -24],
		// Смещение слоя с содержимым относительно слоя с картинкой.
		iconContentOffset: [15, 15],
		// Макет содержимого.
		iconContentLayout: MyIconContentLayout
	});




	myMap.geoObjects
		.add(Placemark_1)
		.add(Placemark_2)
		.add(Placemark_3)
		.add(Placemark_4)
		.add(Placemark_5)
		.add(Placemark_6)
		.add(Placemark_7)
		.add(Placemark_8);
});
