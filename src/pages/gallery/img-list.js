/* eslint-disable import/no-unresolved */

const images = import.meta.glob('../../images/gallery/*.{webp,jpg,jpeg}', {
  eager: true,
});
// use random alt str
const imageUrls = Object.keys(images)
  .map((key) => {
    return {
      img: {
        src: images[key].default.src,
        // eslint-disable-next-line no-useless-escape
        alt: key.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ''),
      },
    };
  })
  .reverse();

export default imageUrls;
