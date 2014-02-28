/**
 * Created by JetBrains PhpStorm.
 * User: bjost
 * Date: 7/13/11
 * Time: 10:48 AM
 * To change this template use File | Settings | File Templates.
 */

function nyanCat(width) {
	if(width.length > 0) {
		this.width = parseInt(width);
	} else {
		this.width = 100;
	}
	
	progressContainer = document.getElementById('rainbowContainer');
	console.log(progressContainer.style.width);
	progressContainer.style.width = this.width + "px";

	this.setPercent = function(percent) {
		this.percent = parseInt(percent);

		progress = document.getElementById('rainbow');
		cat = document.getElementById('nyanCat');

		progress.style.width = this.percent.toString() + "px";

		catProgress = this.percent + 101;
		cat.style.left = catProgress.toString() + "px";
	} //percent
} //nyanCat
