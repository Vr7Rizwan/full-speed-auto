This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
## Project Name
```
Full Speed Auto
```
# Tools

## Frontend
```bash
     Next.js (TypeScript)
     Tailwind CSS
     React Hooks
     TypeScript
```
Here ## heading refer to folders and ``` bash``` refer to subfolders and files
 
# Folder Structure

## app     

"main directory"

### about    

"`about` is a subfolder inside the `app` directory."
```
 page.tsx

The `about` folder contains the `page.tsx` file, which renders the complete About page of the website.  
This page is built using multiple reusable components to provide a clean and structured layout.
```

### brands

"`brands` is a subfolder inside the `app` directory.Which contain another folder [brand]"
```
brand

“The [brand] folder enables dynamic routing for the brand pages. When a user selects a brand from the dropdown menu, the dynamic route fetches and displays the relevant brand information.”

```

```
page.tsx 

The `page.tsx` file in the `brands/[brand]` folder is responsible for rendering dynamic brand-specific pages. It uses the `params.brand` URL parameter to identify the selected brand and fetches its data through the `findBrand` function. The page combines multiple components—including `Banner`, `BrandDetail`, `BrandServices`, `WhyChooseUS`, `Faq`, and `CarWorkshopForm`—to display all relevant information about the brand in a clean and structured layout. Additionally, it dynamically generates SEO metadata (`title` and `description`) for each brand, ensuring an optimized and personalized user experience.

```
## components

The `components` folder inside the `app` directory contains reusable UI components organized into four subfolders:  
- **About** — Components used on the About page  
- **Brands** — Components for brand pages and dynamic brand content  
- **Contact** — Components for contact forms and related sections  
- **Services** — Components displaying various service offerings  
This structure ensures a modular, organized, and maintainable codebase, making it easy to manage and reuse components across the website.

### About

The `About` folder inside `components` contains all the reusable components specifically created for the About page.  
These components structure and display content to ensure a clean and consistent layout. Key components include:

- **AboutBanner.tsx**  
- **Cards.tsx** 
- **CompanyProfile.tsx** 
- **CompanyServices.tsx** 
- **MissionVision.tsx** 
 
 ```
 AboutBanner.tsx

The `AboutBanner` component displays the main banner image for the About page.  
It includes a full-width, responsive image with a semi-transparent overlay, providing a visually appealing header section for the page.

 ```
 ```
 
 ```