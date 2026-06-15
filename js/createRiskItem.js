function createRiskItem(point, description) {
    return `
      <li>
        <span class="body-14-semibold point">
            <div>
                ${arrowIcon}
            </div>
            <span>${point}</span>
        </span>
        
        <span class="body-14 description">
            ${description}
        </span>
      </li>
    `;
  }

  const listElement = document.getElementById('risks-list');

listElement.innerHTML = risks
  .map(risk => createRiskItem(risk.point, risk.description))
  .join('');