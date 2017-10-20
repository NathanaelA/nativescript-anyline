package technology.master.anyline;

import at.nineyards.anyline.modules.energy.EnergyResult;
import at.nineyards.anyline.modules.energy.EnergyResultListener;
import at.nineyards.anyline.camera.CameraOpenListener;
import at.nineyards.anyline.camera.CameraController;

// We have to use a different event method because NativeScript has an issue
// with Generics; so basically we chain the onResult to onAnyResult.

public class AnylineListener implements CameraOpenListener, EnergyResultListener {
    public void onAnyResult(EnergyResult er) {

    }
    public void onResult(EnergyResult er) {
        this.onAnyResult(er);
    };
	public void onCameraOpened(CameraController var1, int var2, int var3) {

	}
    public void onCameraError(Exception var1) {

    }
}

