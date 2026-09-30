import torch from "../../assets/torch.png"
import "./Skeleton.css"

export function BoneDivider() {
  return (
    <div className="skeleton-divider">
      <div className="bone" />
      <div className="torch-icon">
        <img src={torch} alt="Torch" />
        <span className="torch-particle" />
        <span className="torch-particle" />
        <span className="torch-particle" />
        <span className="torch-particle" />
        <span className="torch-particle" />
        <span className="torch-particle" />
        <span className="torch-particle" />
        <span className="torch-particle" />
      </div>
      <div className="bone" />
    </div>
  )
}
