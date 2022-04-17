let mobileDarkLayer = document.querySelector(".mobileDarkLayer");
let mobileSideBar = document.querySelector("aside");
let mobileBurgerMenu = document.querySelector("#burgerMenu");
let mobileCloseMenu = document.querySelector("#mobileCloseMenu");
let mobileFeatures = document.querySelector("#mobileFeatures");
let mobileFeaturesArrow = document.querySelector("#mobileFeatures span");
let mobileCompany = document.querySelector("#mobileCompany");
let mobileCompanyArrow = document.querySelector("#mobileCompany span");
let mobileFeaturesList = document.querySelector("#mobileFeaturesList");
let mobileCompanyList = document.querySelector("#mobileCompanyList");

mobileBurgerMenu.onclick = () => {
	mobileDarkLayer.style.display = "block";
	mobileSideBar.style.display = "block";
};

mobileCloseMenu.onclick = () => {
	mobileDarkLayer.style.display = "none";
	mobileSideBar.style.display = "none";
};

mobileDarkLayer.onclick = () => {
	mobileDarkLayer.style.display = "none";
	mobileSideBar.style.display = "none";
};

mobileFeatures.onclick = () => {
	mobileFeaturesList.classList.toggle('activeList');
	mobileFeaturesArrow.classList.toggle("rotateArrow");
};

mobileCompany.onclick = () => {
	mobileCompanyList.classList.toggle('activeList');
	mobileCompanyArrow.classList.toggle("rotateArrow");
};