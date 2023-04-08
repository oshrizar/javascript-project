const POPUPFORUS = document.getElementById("tryPopup");
let deletePhotoApproval;
const initialDeletePopup = (idToRemove, deletePhotoApprovalFunc) => {
  deletePhotoApproval = deletePhotoApprovalFunc;
  POPUPFORUS.classList.remove("d-none");
  POPUPFORUS.innerHTML = `
        <div id="removePopup">
            <h1>you want to delete?!</h1>
            <div class="d-flex mt-3">
                <button class="btn btn-primary" id="removeApprovalBtn">Yes, delete it</button>
                <button class="btn btn-danger" id="dontRemoveBtn">No! its mistake</button>
            </div>
        </div>`;
  document.getElementById("removeApprovalBtn").addEventListener("click", () => {
    deletePhotoApproval(idToRemove);
    POPUPFORUS.classList.add("d-none");
    POPUPFORUS.innerHTML = "";
  });
  document.getElementById("dontRemoveBtn").addEventListener("click", () => {
    POPUPFORUS.classList.add("d-none");
    POPUPFORUS.innerHTML = "";
  });
};

export default initialDeletePopup;
