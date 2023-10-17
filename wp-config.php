<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать файл в "wp-config.php"
 * и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки базы данных
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры базы данных: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'magazinchik' );

/** Имя пользователя базы данных */
define( 'DB_USER', 'root' );

/** Пароль к базе данных */
define( 'DB_PASSWORD', '' );

/** Имя сервера базы данных */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу. Можно сгенерировать их с помощью
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}.
 *
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными.
 * Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '@~T<QEGt=Jm/QU-e$L`t:AII753HhTWGQKF?EwHx:V;WZq3@Rcq]6)k|9*{~m-M.' );
define( 'SECURE_AUTH_KEY',  'w:e:2)g@]uynUj,=sMx(Ya({YmT2,!zYZ6FlhnZQxDE*EVo&5c}?Sy0z{nIXPa~h' );
define( 'LOGGED_IN_KEY',    ')Xxl`b)/Ar2&o2cig;)n#L(e,{(3vVEgLl8&>#9@WH_]!L5Ft,EB%+p/ZJeu5# (' );
define( 'NONCE_KEY',        '&UvYO:Ja!Nu-}=n-H 0zevyi5Y%:>${dHYVJ(*Hd7Ysm<d0{r6E=1QW{ea%HhYkZ' );
define( 'AUTH_SALT',        'duDHu[%+ui.h@cODmb%Z4{3kHs{kbqe(Bz>[fVBgpZf&=X!2{`ww*kj:&<8`%L G' );
define( 'SECURE_AUTH_SALT', 'e7CKZ:i6<m4L3qcm2Gt:?PAttD0EZeL5hj8qzc,BC}?87{1 )ba5SgCa< s[.pku' );
define( 'LOGGED_IN_SALT',   ';k(P822j/5J =4gcjUb ]&fu+;DvCVgXmP-Any^huI/<#(!7nT@?=.#hF 8X]hvA' );
define( 'NONCE_SALT',       'mB]_TjL(AEt>/a;wBb#4vozQ8Gb3I.ngfh%la>+Ew#[):Rh8Y|7I#&mk*t%`z^?G' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Произвольные значения добавляйте между этой строкой и надписью "дальше не редактируем". */



/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
