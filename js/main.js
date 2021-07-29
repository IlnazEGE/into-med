
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


		Placemark_1 = new ymaps.Placemark([55.42289061863467, 37.28461177002829], {
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

	Placemark_2 = new ymaps.Placemark([55.4859868199274, 37.325113132873916], {
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

	Placemark_3 = new ymaps.Placemark([55.609616355398195, 37.20556171490233], {
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

	Placemark_4 = new ymaps.Placemark([55.57914720544766, 37.12170513898143], {
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

	Placemark_5 = new ymaps.Placemark([55.49336000784939, 37.53370317922574], {
		hintContent: 'Щербинка, ул. Весенняя 6',
		balloonContent: `<div style="display: flex; border-radius: 5px; font-family: 'GraphikLCG'; font-size: 20px; line-height: 150%;	letter-spacing: -0.02em; color: #000000;"><img src="img/icons/balloon.png" alt=""><div style="padding: 6px 3px 0 10px;">Щербинка, ул. Весенняя 6</div></div>`,
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

	Placemark_6 = new ymaps.Placemark([55.52279644785652, 37.416361890281266], {
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

	Placemark_7 = new ymaps.Placemark([55.50024567147874, 37.567820862213516], {
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

	Placemark_8 = new ymaps.Placemark([55.52998057818815, 37.443065952032335], {
		hintContent: 'посёлок Воскресенское 27',
		balloonContent: `<div style="display: flex; border-radius: 5px; font-family: 'GraphikLCG'; font-size: 20px; line-height: 150%;	letter-spacing: -0.02em; color: #000000;"><img src="img/icons/balloon.png" alt=""><div style="padding: 6px 3px 0 10px;">посёлок Воскресенское 27</div></div>`,
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
	Placemark_9 = new ymaps.Placemark([55.493469409974956, 37.54698438279193], {
		hintContent: 'деревня Новинки 7',
		balloonContent: `<div style="display: flex; border-radius: 5px; font-family: 'GraphikLCG'; font-size: 20px; line-height: 150%;	letter-spacing: -0.02em; color: #000000;"><img src="img/icons/balloon.png" alt=""><div style="padding: 6px 3px 0 10px;">деревня Новинки 7</div></div>`,
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
	Placemark_10 = new ymaps.Placemark([55.49280691467436, 37.552156761566536], {
		hintContent: 'квартал Южный 4',
		balloonContent: `<div style="display: flex; border-radius: 5px; font-family: 'GraphikLCG'; font-size: 20px; line-height: 150%;	letter-spacing: -0.02em; color: #000000;"><img src="img/icons/balloon.png" alt=""><div style="padding: 6px 3px 0 10px;">квартал Южный 4</div></div>`,
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
		.add(Placemark_8)
		.add(Placemark_9)
		.add(Placemark_10);
});
