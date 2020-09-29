import ImageKit from "imagekit-javascript";
import { urlEndpoint } from "../config/imagekit";

const imagekit = new ImageKit({
    urlEndpoint
}); 

module.exports.getImagekitUrlFromSrc = function(imageSrc, transformationArr){
	var ikOptions = {
		src: imageSrc,
		transformation: transformationArr
	}
	var imageURL = imagekit.url(ikOptions);

	console.log({imageURL});

	return imageURL;
}

module.exports.getImagekitUrlFromPath = function(imagePath, transformationArr, transformationPostion){
	var ikOptions = {
		urlEndpoint,
		path : imagePath,
		transformation: transformationArr
	};
	if(transformationPostion) ikOptions.transformationPostion = transformationPostion;

	var imageURL = imagekit.url(ikOptions);

	console.log({imageURL});

	return imageURL;
}