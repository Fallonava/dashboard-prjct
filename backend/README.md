# Backend Setup

Since `composer` was not found in the environment, we could not auto-generate the Laravel project.

## Instructions

1.  Open a terminal in this directory (`backend`).
2.  Run the following command to create the Laravel project:
    ```bash
    composer create-project laravel/laravel .
    ```
3.  Install FilamentPHP:
    ```bash
    composer require filament/filament:"^3.2" -W
    php artisan filament:install --panels
    ```
4.  Install Laravel Sanctum (if not already included):
    ```bash
    composer require laravel/sanctum
    php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
    ```

Once done, please let the AI know so we can proceed with migration and configuration.
