import { NiivueCanvas, NVROptions, NVRVolume } from "../src";
import { useImmer } from "use-immer";
import React from "react";

const image1 = "/aligned_mri.nii";
const image2 = "/segmented_mri.nii";

const Viewer = () => {
  const [volumes, setVolumes] = useImmer<{ [key: string]: NVRVolume }>({
    brain: {
      url: image1,
      colormap: "gray",
    },
    ventricle: {
      url: image2,
      opacity: 0.9,
      colormap: "warm",
    },
  });

  const [options, setOptions] = useImmer<NVROptions>({
    isOrientCube: false,
  });

  const setOpacity = (value: number) => {
    setVolumes((draft) => {
      draft.ventricle.opacity = value;
    });
  };

  const setOrientCube = (value: boolean) => {
    setOptions((draft) => {
      draft.isOrientCube = !value;
    });
  };

  return (
    <div>
      <NiivueCanvas
        options={options}
        volumes={React.useMemo(() => Object.values(volumes), [volumes])}
      />
    </div>
  );
};

export default Viewer;
