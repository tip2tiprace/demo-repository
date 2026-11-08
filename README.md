# Tip 2 Tip Website 

## How to update the website. 

1. pull the website to your computer using GitHub - see here https://docs.github.com/en/get-started/using-github/hello-world
2. make changes in the qmd files using Quarto syntax. Heaps of info here https://quarto.org/docs/gallery/ 
	Quarto style for the pages and sections are saved in style.css so you can control the style inside that file and when you publish the site it will convert you website to html, so no need to know how to code in that. 
3. run > quarto render
4. push your changes in GitHub, configure you GitHub username and email in the terminal if nedded 
6. run > quarto publish gh-pages

## Tip 2 Tip photo gallery

Add photos directly to [images/tip2tip_gallery](images/tip2tip_gallery).
The [Tip 2 Tip race page](tip2tiprace.qmd) automatically includes all JPG,
JPEG, PNG, WebP, GIF and AVIF images in that folder when you run `quarto render`.
Photos appear in filename order. Use prefixes such as `01-start.jpg` and
`02-on-the-road.jpg` to choose their order. 