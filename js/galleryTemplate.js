const doGalleryTemplate = ({ preview, original, description }) => `
    <li>
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" width="340px">
    </li>
`;

export default doGalleryTemplate;