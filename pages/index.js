import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import useSpline from '@splinetool/r3f-spline'
import { OrbitControls, OrthographicCamera } from '@react-three/drei'

function Scene({ ...props }) {
  const { nodes, materials } = useSpline(
    'https://prod.spline.design/uTwRuvBjKb9WViLa/scene.splinecode'
  )

  console.log(nodes, materials)
  return (
    <>
      <color attach="background" args={['#f3cad4']} />
      <group {...props} dispose={null}>
        <mesh
          name="BG"
          geometry={nodes.BG.geometry}
          material={materials['BG Material']}
          castShadow
          receiveShadow
          position={[873.94, -125.47, -1662.27]}
          rotation={[-Math.PI / 6, -0.75, -0.37]}
        />
        <directionalLight
          name="Directional Light"
          castShadow
          intensity={0.7}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-3610.2915}
          shadow-camera-right={3610.2915}
          shadow-camera-top={3610.2915}
          shadow-camera-bottom={-3610.2915}
          position={[-723.38, 1320.76, 435.43]}
        />
        <mesh
          name="Walls"
          geometry={nodes.Walls.geometry}
          material={materials['Walls Material']}
          castShadow
          receiveShadow
          position={[33.17, -323.76, -23.55]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.7}
        />
        <group name="Controls" position={[-450.79, -384.27, 1226.54]}>
          <mesh
            name="Color Purple"
            geometry={nodes['Color Purple'].geometry}
            material={materials['Color Purple Material']}
            castShadow
            receiveShadow
            position={[292.21, 0, 0]}
            rotation={[0, -Math.PI / 2, 0]}
          />
          <mesh
            name="Color Yellow"
            geometry={nodes['Color Yellow'].geometry}
            material={materials['Color Yellow Material']}
            castShadow
            receiveShadow
            position={[-3.76, 0, 0]}
            rotation={[0, -Math.PI / 2, 0]}
          />
          <mesh
            name="Color Pink"
            geometry={nodes['Color Pink'].geometry}
            material={materials['Color Pink Material']}
            castShadow
            receiveShadow
            position={[-292.21, 0, 0]}
            rotation={[0, -Math.PI / 2, 0]}
          />
        </group>
        <OrthographicCamera
          name="Camera 2"
          makeDefault={true}
          zoom={0.24}
          far={100000}
          near={-100000}
          position={[-3662.89, 2379.99, 3678.25]}
          rotation={[-0.54, -0.71, -0.37]}
        />
        <mesh
          name="heart-ui"
          geometry={nodes['heart-ui'].geometry}
          material={materials['red-3']}
          receiveShadow
          position={[750.98, 324.97, 495.2]}
          rotation={[-0.59, -1.36, -1.13]}
        />
        <mesh
          name="Sphere"
          geometry={nodes.Sphere.geometry}
          material={materials['Sphere Material']}
          castShadow
          receiveShadow
          position={[153.76, -206.69, -725.75]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          name="book-green"
          geometry={nodes['book-green'].geometry}
          material={materials['red-6']}
          castShadow
          receiveShadow
          position={[797.82, 181.7, -733.6]}
          rotation={[-Math.PI / 2, -1.4, -Math.PI / 2]}
        />
        <mesh
          name="book-red"
          geometry={nodes['book-red'].geometry}
          material={materials['red-6']}
          castShadow
          receiveShadow
          position={[873.04, 235.86, -716.95]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          name="book-yellow"
          geometry={nodes['book-yellow'].geometry}
          material={materials['red-4']}
          castShadow
          receiveShadow
          position={[850.55, 201.36, -716.95]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          name="paper"
          geometry={nodes.paper.geometry}
          material={materials['red-1']}
          castShadow
          receiveShadow
          position={[490.67, 107.27, -605.12]}
          rotation={[-Math.PI / 2, 0, -1.13]}
        />
        <group
          name="book-blue"
          position={[546.69, 122.67, -568.11]}
          rotation={[-0.01, 0.08, -1.57]}
          scale={[0.74, 1.35, 1.23]}
        >
          <mesh
            name="Rectangle"
            geometry={nodes.Rectangle.geometry}
            material={materials['red-2']}
            castShadow
            receiveShadow
            position={[-22.7, 32.77, 1.79]}
            rotation={[0, -Math.PI / 2, 0]}
          />
          <mesh
            name="Cube 4"
            geometry={nodes['Cube 4'].geometry}
            material={materials['red-1']}
            castShadow
            receiveShadow
            position={[-0.32, 0.86, 0.42]}
            scale={[0.99, 1.01, 1]}
          />
          <mesh
            name="Cube 41"
            geometry={nodes['Cube 41'].geometry}
            material={materials['Cube 41 Material']}
            castShadow
            receiveShadow
            position={[-16.68, -0.27, 9.75]}
            scale={[0.99, 1.01, 1]}
          />
        </group>
        <group name="lamp" position={[643.47, 608.8, -737.72]} scale={1.65}>
          <mesh
            name="Cylinder 4"
            geometry={nodes['Cylinder 4'].geometry}
            material={materials['Cylinder 4 Material']}
            castShadow
            receiveShadow
            position={[0.25, -105.76, -0.71]}
          />
          <mesh
            name="Cylinder 6"
            geometry={nodes['Cylinder 6'].geometry}
            material={materials['Cylinder 6 Material']}
            castShadow
            receiveShadow
            position={[-0.22, -56.91, -0.71]}
          />
          <mesh
            name="Cylinder 5"
            geometry={nodes['Cylinder 5'].geometry}
            material={materials['Cylinder 5 Material']}
            castShadow
            receiveShadow
            position={[-0.22, -155.57, -0.71]}
          />
          <mesh
            name="Cylinder 3"
            geometry={nodes['Cylinder 3'].geometry}
            material={materials['Cylinder 3 Material']}
            castShadow
            receiveShadow
            position={[-0.53, -212.52, 1.57]}
          />
          <mesh
            name="Cylinder 2"
            geometry={nodes['Cylinder 2'].geometry}
            material={materials['Cylinder 2 Material']}
            castShadow
            receiveShadow
            position={[-0.25, -296.92, 0.71]}
          />
        </group>
        <group name="material-ui" position={[820.65, 713.95, 442.46]}>
          <mesh
            name="Ellipse 3"
            geometry={nodes['Ellipse 3'].geometry}
            material={materials['UI panel-blue']}
            castShadow
            receiveShadow
            position={[-2.54, -8.92, 1.44]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={0.59}
          />
          <mesh
            name="Ellipse 2"
            geometry={nodes['Ellipse 2'].geometry}
            material={materials.table}
            castShadow
            receiveShadow
            position={[-2.54, 69.36, 1.44]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={0.59}
          />
          <mesh
            name="Ellipse"
            geometry={nodes.Ellipse.geometry}
            material={materials['red-4']}
            castShadow
            receiveShadow
            position={[-2.54, 146.53, 1.44]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={0.59}
          />
          <mesh
            name="Rectangle 5"
            geometry={nodes['Rectangle 5'].geometry}
            material={materials['red-3']}
            castShadow
            receiveShadow
            position={[9.48, -27, 0]}
            rotation={[0, -Math.PI / 2, 0]}
          />
        </group>
        <group
          name="picture-ui"
          position={[620.15, 554.31, -211.89]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.71}
        >
          <mesh
            name="Triangle 2"
            geometry={nodes['Triangle 2'].geometry}
            material={materials['Triangle 2 Material']}
            castShadow
            receiveShadow
            position={[76.71, -42.67, 9.58]}
            scale={1.42}
          />
          <mesh
            name="Triangle"
            geometry={nodes.Triangle.geometry}
            material={materials['Triangle Material']}
            castShadow
            receiveShadow
            position={[-96.33, -21.16, 9.58]}
            scale={1.42}
          />
          <mesh
            name="Ellipse1"
            geometry={nodes.Ellipse1.geometry}
            material={materials['Ellipse1 Material']}
            castShadow
            receiveShadow
            position={[-14.73, 68.78, 9.58]}
            scale={1.42}
          />
          <mesh
            name="Rectangle 6"
            geometry={nodes['Rectangle 6'].geometry}
            material={materials['Rectangle 6 Material']}
            castShadow
            receiveShadow
            position={[-42, 0, -1.46]}
          />
          <mesh
            name="Rectangle 51"
            geometry={nodes['Rectangle 51'].geometry}
            material={materials['red-2']}
            castShadow
            receiveShadow
            position={[-38, 0, -17.88]}
          />
        </group>
        <group
          name="color-ui"
          position={[722.77, 745.42, -472.72]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.62}
        >
          <mesh
            name="Ellipse 31"
            geometry={nodes['Ellipse 31'].geometry}
            material={materials['red-1']}
            castShadow
            receiveShadow
            position={[-59.3, 308.03, 4.65]}
            scale={1.14}
          />
          <mesh
            name="Ellipse 21"
            geometry={nodes['Ellipse 21'].geometry}
            material={materials['red-1']}
            castShadow
            receiveShadow
            position={[-117.28, 308.03, 4.65]}
            scale={1.14}
          />
          <mesh
            name="Ellipse2"
            geometry={nodes.Ellipse2.geometry}
            material={materials['red-1']}
            castShadow
            receiveShadow
            position={[-177.11, 308.03, 4.65]}
            scale={1.14}
          />
          <mesh
            name="Rectangle 7"
            geometry={nodes['Rectangle 7'].geometry}
            material={materials['ui-color']}
            castShadow
            receiveShadow
            position={[0, -238.94, 4]}
          />
          <mesh
            name="Rectangle 9"
            geometry={nodes['Rectangle 9'].geometry}
            material={materials['red-3']}
            castShadow
            position={[98.23, -16.4, 3.27]}
          />
          <mesh
            name="Rectangle 8"
            geometry={nodes['Rectangle 8'].geometry}
            material={materials['red-3']}
            castShadow
            position={[98.23, 173.68, 3.27]}
          />
          <mesh
            name="Rectangle 91"
            geometry={nodes['Rectangle 91'].geometry}
            material={materials['red-3']}
            castShadow
            position={[-106.76, -16.4, 3.27]}
          />
          <mesh
            name="Rectangle 61"
            geometry={nodes['Rectangle 61'].geometry}
            material={materials['red-2']}
            castShadow
            position={[-106.76, 173.68, 3.27]}
          />
          <mesh
            name="Rectangle 52"
            geometry={nodes['Rectangle 52'].geometry}
            material={materials['Rectangle 52 Material']}
            castShadow
            receiveShadow
            position={[0, 0, -13.47]}
          />
        </group>
        <group
          name="text-ui"
          position={[805.65, 559.18, -103.29]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.66}
        >
          <group
            name="Group 15"
            position={[381.08, 121.32, 18.33]}
            scale={1.01}
          >
            <mesh
              name="Cylinder 21"
              geometry={nodes['Cylinder 21'].geometry}
              material={materials['Cylinder 21 Material']}
              castShadow
              receiveShadow
              position={[-1.66, 133.57, 0.8]}
              rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh
              name="Cylinder"
              geometry={nodes.Cylinder.geometry}
              material={materials['Cylinder Material']}
              castShadow
              receiveShadow
              position={[0.62, -133.57, 0.8]}
              rotation={[0, 0, Math.PI / 2]}
            />
            <mesh
              name="Sphere 2"
              geometry={nodes['Sphere 2'].geometry}
              material={materials['Sphere 2 Material']}
              castShadow
              receiveShadow
              position={[122.25, 132.87, 0]}
              rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh
              name="Sphere1"
              geometry={nodes.Sphere1.geometry}
              material={materials['Sphere1 Material']}
              castShadow
              receiveShadow
              position={[-141.8, -132.87, 0]}
              rotation={[0, 0, Math.PI / 2]}
            />
            <mesh
              name="Cylinder 22"
              geometry={nodes['Cylinder 22'].geometry}
              material={materials['Cylinder 22 Material']}
              castShadow
              receiveShadow
              position={[123.29, 0.97, 0.8]}
              rotation={[0, 0, Math.PI]}
            />
            <mesh
              name="Cylinder1"
              geometry={nodes.Cylinder1.geometry}
              material={materials['Cylinder1 Material']}
              castShadow
              receiveShadow
              position={[-142.85, -0.97, 0.8]}
            />
            <mesh
              name="Sphere 21"
              geometry={nodes['Sphere 21'].geometry}
              material={materials['Sphere 21 Material']}
              castShadow
              receiveShadow
              position={[122.59, -132.87, 0]}
              rotation={[0, 0, Math.PI]}
            />
            <mesh
              name="Sphere2"
              geometry={nodes.Sphere2.geometry}
              material={materials['Sphere2 Material']}
              castShadow
              receiveShadow
              position={[-142.14, 132.87, 0]}
            />
          </group>
          <mesh
            name="Rectangle 4"
            geometry={nodes['Rectangle 4'].geometry}
            material={materials['red-1']}
            castShadow
            receiveShadow
            position={[369.97, -315.35, 5.68]}
            scale={1.52}
          />
          <mesh
            name="Rectangle 3"
            geometry={nodes['Rectangle 3'].geometry}
            material={materials['red-1']}
            castShadow
            receiveShadow
            position={[369.97, -225.14, 5.68]}
            scale={1.52}
          />
          <mesh
            name="Rectangle 2"
            geometry={nodes['Rectangle 2'].geometry}
            material={materials['red-1']}
            castShadow
            receiveShadow
            position={[410.36, -135.84, 5.68]}
            scale={1.52}
          />
          <group name="Text" position={[372.71, 159.53, 22.45]} scale={1.52}>
            <mesh
              name="A"
              geometry={nodes.A.geometry}
              material={materials['red-1']}
              castShadow
              receiveShadow
              position={[-77, -67.5, 0]}
            />
            <mesh
              name="a"
              geometry={nodes.a.geometry}
              material={materials['red-1']}
              castShadow
              receiveShadow
              position={[3.91, -67.5, 0]}
            />
          </group>
          <mesh
            name="Rectangle 53"
            geometry={nodes['Rectangle 53'].geometry}
            material={materials['Rectangle 53 Material']}
            castShadow
            position={[-180.73, -40.12, 19.4]}
          />
          <mesh
            name="Rectangle 31"
            geometry={nodes['Rectangle 31'].geometry}
            material={materials['Rectangle 31 Material']}
            castShadow
            receiveShadow
            position={[0, -44, 5.66]}
          />
          <mesh
            name="Rectangle 21"
            geometry={nodes['Rectangle 21'].geometry}
            material={materials['Rectangle 21 Material']}
            castShadow
            receiveShadow
            position={[0, 0, -23.62]}
          />
        </group>
        <group name="Pen holder" position={[688.69, 174.4, 215.4]}>
          <mesh
            name="Cube 2"
            geometry={nodes['Cube 2'].geometry}
            material={materials['Cube 2 Material']}
            castShadow
            receiveShadow
            position={[6.44, -6.48, 8.59]}
            rotation={[0.25, -0.09, -0.25]}
          />
          <mesh
            name="Cube"
            geometry={nodes.Cube.geometry}
            material={materials['red-1']}
            castShadow
            receiveShadow
            position={[-10.67, -17.78, -10.37]}
            rotation={[-0.17, -0.04, 0.26]}
          />
          <mesh
            name="Cylinder2"
            geometry={nodes.Cylinder2.geometry}
            material={materials['UI panel-blue']}
            castShadow
            receiveShadow
            position={[-3.34, -58.97, 0]}
          />
        </group>
        <group name="artboard" position={[542.1, 176.09, -121.14]}>
          <mesh
            name="Cube 42"
            geometry={nodes['Cube 42'].geometry}
            material={materials['red-5']}
            castShadow
            receiveShadow
            position={[120.14, -9.39, -233.33]}
          />
          <mesh
            name="Cube 3"
            geometry={nodes['Cube 3'].geometry}
            material={materials['red-5']}
            castShadow
            receiveShadow
            position={[120.14, -9.39, 233.31]}
          />
          <mesh
            name="Cube 43"
            geometry={nodes['Cube 43'].geometry}
            material={materials['red-5']}
            castShadow
            receiveShadow
            position={[3.73, -4.74, -233.33]}
            rotation={[0, 0, -1.22]}
          />
          <mesh
            name="Cube 21"
            geometry={nodes['Cube 21'].geometry}
            material={materials['red-5']}
            castShadow
            receiveShadow
            position={[3.73, -4.74, 233.31]}
            rotation={[0, 0, -1.22]}
          />
          <mesh
            name="Cube 44"
            geometry={nodes['Cube 44'].geometry}
            material={materials['red-5']}
            castShadow
            receiveShadow
            position={[7.63, -63.45, -233.33]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            name="Cube1"
            geometry={nodes.Cube1.geometry}
            material={materials['red-5']}
            castShadow
            receiveShadow
            position={[7.63, -63.45, 233.31]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            name="Rectangle 22"
            geometry={nodes['Rectangle 22'].geometry}
            material={materials['Rectangle 22 Material']}
            castShadow
            receiveShadow
            position={[-3.72, 19.96, 0]}
            rotation={[-Math.PI / 2, -Math.PI / 9, -Math.PI / 2]}
          />
          <mesh
            name="Rectangle1"
            geometry={nodes.Rectangle1.geometry}
            material={materials['red-4']}
            castShadow
            receiveShadow
            position={[3.42, 0.36, 0]}
            rotation={[-Math.PI / 2, -Math.PI / 9, -Math.PI / 2]}
          />
        </group>
        <group name="picture-1" position={[-347.79, -106.98, -808.92]}>
          <mesh
            name="Rectangle2"
            geometry={nodes.Rectangle2.geometry}
            material={materials.paper}
            castShadow
            receiveShadow
            position={[-0.82, 3.33, 18.22]}
            rotation={[-0.17, 0, -Math.PI / 2]}
          />
          <mesh
            name="Cube2"
            geometry={nodes.Cube2.geometry}
            material={materials['red-4']}
            castShadow
            receiveShadow
            rotation={[-0.17, 0, 0]}
          />
        </group>
        <group
          name="picture-2"
          position={[320.04, -166.06, -715.26]}
          rotation={[-0.09, 0, 0]}
        >
          <mesh
            name="Rectangle3"
            geometry={nodes.Rectangle3.geometry}
            material={materials['red-6']}
            castShadow
            receiveShadow
            position={[-0.56, -0.28, 12.36]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            name="Cube3"
            geometry={nodes.Cube3.geometry}
            material={materials['red-5']}
            castShadow
            receiveShadow
            position={[0, 0, -0.36]}
          />
        </group>
        <group
          name="picture-3"
          position={[831.88, -201.39, 576.71]}
          rotation={[-Math.PI / 2, -1.4, -Math.PI / 2]}
        >
          <mesh
            name="Rectangle4"
            geometry={nodes.Rectangle4.geometry}
            material={materials.paper}
            castShadow
            receiveShadow
            position={[-0.56, -0.28, 12.36]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            name="Cube4"
            geometry={nodes.Cube4.geometry}
            material={materials['red-4']}
            castShadow
            receiveShadow
            position={[0, 0, -0.36]}
          />
        </group>
        <group
          name="picture-4"
          position={[790.06, -86.94, 722.7]}
          rotation={[-Math.PI / 2, -1.31, -Math.PI / 2]}
        >
          <mesh
            name="Rectangle 41"
            geometry={nodes['Rectangle 41'].geometry}
            material={materials['red-5']}
            castShadow
            receiveShadow
            position={[-0.94, -1.61, 7.22]}
            scale={[0.71, 0.94, 0.82]}
          />
          <mesh
            name="Rectangle 32"
            geometry={nodes['Rectangle 32'].geometry}
            material={materials['red-6']}
            castShadow
            receiveShadow
            position={[0, 0, -16.18]}
            scale={[0.71, 0.94, 0.82]}
          />
          <mesh
            name="Shape 5"
            geometry={nodes['Shape 5'].geometry}
            material={materials['Shape 5 Material']}
            castShadow
            receiveShadow
            position={[52.02, 4.16, 8.43]}
          />
          <mesh
            name="Shape 4"
            geometry={nodes['Shape 4'].geometry}
            material={materials['Shape 4 Material']}
            castShadow
            receiveShadow
            position={[-137.12, -127.06, 10.45]}
          />
          <mesh
            name="Shape 3"
            geometry={nodes['Shape 3'].geometry}
            material={materials['Shape 3 Material']}
            castShadow
            receiveShadow
            position={[-68.36, 75.39, 16.44]}
          />
          <mesh
            name="Shape 2"
            geometry={nodes['Shape 2'].geometry}
            material={materials['Shape 2 Material']}
            castShadow
            receiveShadow
            position={[-66.71, -5.56, 16.44]}
          />
          <mesh
            name="Shape"
            geometry={nodes.Shape.geometry}
            material={materials['Shape Material']}
            castShadow
            receiveShadow
            position={[-50.45, 86.62, 14.15]}
          />
        </group>
        <group name="picture-5" position={[592.93, 470.13, -1657.14]}>
          <mesh
            name="Rectangle 33"
            geometry={nodes['Rectangle 33'].geometry}
            material={materials['red-4']}
            castShadow
            receiveShadow
            position={[-1.61, 0, -17.53]}
          />
          <mesh
            name="Rectangle5"
            geometry={nodes.Rectangle5.geometry}
            material={materials.paper}
            castShadow
            receiveShadow
            position={[0, 0, 4.27]}
          />
        </group>
        <group
          name="picture-6"
          position={[899.65, 188.59, 815.38]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <mesh
            name="Rectangle 34"
            geometry={nodes['Rectangle 34'].geometry}
            material={materials['red-4']}
            castShadow
            receiveShadow
            position={[-1.61, 0, -17.53]}
          />
          <mesh
            name="Rectangle6"
            geometry={nodes.Rectangle6.geometry}
            material={materials.paper}
            castShadow
            receiveShadow
            position={[0, 0, 30.3]}
          />
        </group>
        <group name="picture-7" position={[-603.71, 658.29, -849.62]}>
          <mesh
            name="Ellipse3"
            geometry={nodes.Ellipse3.geometry}
            material={materials['Ellipse3 Material']}
            castShadow
            receiveShadow
            position={[40.5, -13.74, 11.15]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            name="Shape 41"
            geometry={nodes['Shape 41'].geometry}
            material={materials['Shape 41 Material']}
            castShadow
            receiveShadow
            position={[91.49, -29.89, 8.45]}
          />
          <mesh
            name="Shape 31"
            geometry={nodes['Shape 31'].geometry}
            material={materials['Shape 31 Material']}
            castShadow
            receiveShadow
            position={[-38.63, 185.75, 8.35]}
          />
          <mesh
            name="Shape 21"
            geometry={nodes['Shape 21'].geometry}
            material={materials['Shape 21 Material']}
            castShadow
            receiveShadow
            position={[-112.41, 118.69, 8.21]}
          />
          <mesh
            name="Shape1"
            geometry={nodes.Shape1.geometry}
            material={materials['Shape1 Material']}
            castShadow
            receiveShadow
            position={[-107.71, 119.37, 7.36]}
          />
          <mesh
            name="Rectangle7"
            geometry={nodes.Rectangle7.geometry}
            material={materials['red-5']}
            castShadow
            receiveShadow
            position={[0, 0, 2.89]}
          />
          <mesh
            name="Rectangle 35"
            geometry={nodes['Rectangle 35'].geometry}
            material={materials['red-6']}
            castShadow
            receiveShadow
            position={[0, 0, -17.53]}
          />
        </group>
        <group
          name="picture-8"
          position={[666.58, 205.46, 370.5]}
          rotation={[0, -0.17, -0.26]}
        >
          <mesh
            name="Shape 32"
            geometry={nodes['Shape 32'].geometry}
            material={materials['Shape 32 Material']}
            castShadow
            receiveShadow
            position={[-10.48, -28.6, -16.28]}
            rotation={[0, -Math.PI / 2, 0]}
          />
          <mesh
            name="Shape 22"
            geometry={nodes['Shape 22'].geometry}
            material={materials['red-5']}
            castShadow
            receiveShadow
            position={[-10.75, 72.86, -24.1]}
            rotation={[0, -Math.PI / 2, 0]}
          />
          <mesh
            name="Shape2"
            geometry={nodes.Shape2.geometry}
            material={materials['Shape2 Material']}
            castShadow
            receiveShadow
            position={[-12.4, 52.27, -29.37]}
            rotation={[0, -Math.PI / 2, 0]}
          />
          <mesh
            name="Rectangle 23"
            geometry={nodes['Rectangle 23'].geometry}
            material={materials['Rectangle 23 Material']}
            castShadow
            receiveShadow
            position={[-9.93, 0, 0]}
            rotation={[0, -Math.PI / 2, 0]}
          />
          <mesh
            name="Rectangle 36"
            geometry={nodes['Rectangle 36'].geometry}
            material={materials.table}
            castShadow
            receiveShadow
            position={[55.06, -11.51, 7.12]}
            rotation={[Math.PI / 2, -0.87, Math.PI / 2]}
          />
          <mesh
            name="Rectangle8"
            geometry={nodes.Rectangle8.geometry}
            material={materials.table}
            castShadow
            receiveShadow
            position={[4.4, 0, 0]}
            rotation={[0, -Math.PI / 2, 0]}
          />
        </group>
        <group name="window" position={[129, 617.5, -853.89]}>
          <mesh
            name="Cube 45"
            geometry={nodes['Cube 45'].geometry}
            material={materials['red-4']}
            castShadow
            receiveShadow
            position={[0.63, 0.94, -10.81]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            name="Cube 5"
            geometry={nodes['Cube 5'].geometry}
            material={materials['red-4']}
            castShadow
            receiveShadow
            position={[1.69, 105.58, 0]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            name="窗户"
            geometry={nodes.窗户.geometry}
            material={materials['窗户 Material']}
            castShadow
            receiveShadow
            position={[0, 0, 9.16]}
            rotation={[0, 0, -Math.PI / 2]}
          />
        </group>
        <group name="chair" position={[158.54, -140.47, 165.44]}>
          <mesh
            name="Cube 31"
            geometry={nodes['Cube 31'].geometry}
            material={materials['chair-ao']}
            castShadow
            receiveShadow
            position={[70.48, -13.2, -67.54]}
            rotation={[0.09, 0.02, -1.48]}
            scale={[0.98, 1, 1]}
          />
          <mesh
            name="Cube 22"
            geometry={nodes['Cube 22'].geometry}
            material={materials['chair-ao']}
            castShadow
            receiveShadow
            position={[-71.76, -13.2, -67.54]}
            rotation={[0.09, 0, -1.66]}
            scale={[0.98, 1, 1]}
          />
          <mesh
            name="Cube 32"
            geometry={nodes['Cube 32'].geometry}
            material={materials['chair-ao']}
            castShadow
            receiveShadow
            position={[70.48, -13.2, 68.88]}
            rotation={[-0.09, -0.02, -1.48]}
            scale={[0.98, 1, 1]}
          />
          <mesh
            name="Cube5"
            geometry={nodes.Cube5.geometry}
            material={materials['chair-ao']}
            castShadow
            receiveShadow
            position={[-71.76, -13.2, 68.88]}
            rotation={[-0.09, 0.01, -1.66]}
            scale={[0.98, 1, 1]}
          />
          <mesh
            name="Cylinder3"
            geometry={nodes.Cylinder3.geometry}
            material={materials['Cylinder3 Material']}
            castShadow
            receiveShadow
            position={[0, 152.2, 0]}
            rotation={[0, -Math.PI / 2, 0]}
          />
        </group>
        <group
          name="plant"
          position={[478.18, 52.43, 781.08]}
          rotation={[0, 0.4, 0]}
          scale={0.75}
        >
          <mesh
            name="Cube 23"
            geometry={nodes['Cube 23'].geometry}
            material={materials['plant-green']}
            castShadow
            receiveShadow
            position={[15.33, 90.95, -1.22]}
            rotation={[0, Math.PI / 4, 0]}
          />
          <mesh
            name="Cube 33"
            geometry={nodes['Cube 33'].geometry}
            material={materials['plant-green']}
            castShadow
            receiveShadow
            position={[-21.33, 13.1, 36.98]}
            rotation={[-3.05, -Math.PI / 4, -3.05]}
            scale={1.05}
          />
          <mesh
            name="Cube 46"
            geometry={nodes['Cube 46'].geometry}
            material={materials['plant-green']}
            castShadow
            receiveShadow
            position={[37.57, -65.59, -107]}
            rotation={[-0.04, 1.22, -0.22]}
          />
          <mesh
            name="Cube 51"
            geometry={nodes['Cube 51'].geometry}
            material={materials['plant-green']}
            castShadow
            receiveShadow
            position={[-12.89, -31.14, 51.83]}
            rotation={[-3.11, 1.3, -2.91]}
            scale={1.05}
          />
          <mesh
            name="Cube6"
            geometry={nodes.Cube6.geometry}
            material={materials['plant-green']}
            castShadow
            receiveShadow
            position={[17.45, -42.1, 91.53]}
            rotation={[0, -1.22, -0.17]}
          />
          <mesh
            name="Ellipse 32"
            geometry={nodes['Ellipse 32'].geometry}
            material={materials['red-5']}
            castShadow
            receiveShadow
            position={[7.85, -163.99, 1.2]}
            rotation={[-Math.PI / 2, 0, -1.98]}
            scale={1.33}
          />
          <mesh
            name="Plant Base"
            geometry={nodes['Plant Base'].geometry}
            material={materials['Plant Base Material']}
            castShadow
            receiveShadow
            position={[13.95, -366.41, 0.56]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1.44}
          />
        </group>
        <group
          name="box"
          position={[648.15, -183.48, -609.72]}
          rotation={[0, -0.26, 0]}
          scale={2.34}
        >
          <mesh
            name="Rectangle 24"
            geometry={nodes['Rectangle 24'].geometry}
            material={materials['Rectangle 24 Material']}
            castShadow
            receiveShadow
            position={[-10.34, -26.88, 57.12]}
          />
          <mesh
            name="Cube7"
            geometry={nodes.Cube7.geometry}
            material={materials['Cube7 Material']}
            castShadow
            receiveShadow
            position={[-0.69, -0.53, -1.41]}
            scale={0.78}
          />
        </group>
        <group
          name="bucket"
          position={[-770.83, -194.22, -624.27]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <mesh
            name="Cube 34"
            geometry={nodes['Cube 34'].geometry}
            material={materials['red-6']}
            castShadow
            receiveShadow
            position={[13.16, -22.51, -7.55]}
            rotation={[-0.61, 0.04, 2.88]}
            scale={2.53}
          />
          <mesh
            name="Cube 24"
            geometry={nodes['Cube 24'].geometry}
            material={materials['red-6']}
            castShadow
            receiveShadow
            position={[28.14, 5.35, 39.88]}
            rotation={[0.34, -0.12, 2.81]}
            scale={2.53}
          />
          <mesh
            name="Cube8"
            geometry={nodes.Cube8.geometry}
            material={materials['red-6']}
            castShadow
            receiveShadow
            position={[-45.98, -8.65, 19.75]}
            rotation={[0.01, -0.01, -2.79]}
            scale={2.53}
          />
          <mesh
            name="Ellipse4"
            geometry={nodes.Ellipse4.geometry}
            material={materials['UI panel-blue']}
            castShadow
            receiveShadow
            position={[-1.56, -20.78, 5.1]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          />
          <mesh
            name="Cube9"
            geometry={nodes.Cube9.geometry}
            material={materials['red-4']}
            castShadow
            receiveShadow
            position={[-4.16, -47.24, 4.53]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          />
        </group>
        <group
          name="artboard-2"
          position={[-473.15, 200.52, -517.55]}
          rotation={[-0.31, -0.59, -0.13]}
        >
          <group
            name="画"
            position={[-2.45, 124.23, 31.49]}
            rotation={[0.26, 0, 0]}
          >
            <mesh
              name="Shape 8"
              geometry={nodes['Shape 8'].geometry}
              material={materials['Shape 8 Material']}
              castShadow
              receiveShadow
              position={[78.91, -222.98, 65.09]}
              rotation={[-0.26, 0, 0]}
              scale={0.95}
            />
            <mesh
              name="Shape 7"
              geometry={nodes['Shape 7'].geometry}
              material={materials['Shape 7 Material']}
              castShadow
              receiveShadow
              position={[160.24, 193.09, -50.27]}
              rotation={[-0.26, 0, 0]}
              scale={0.95}
            />
            <mesh
              name="Shape 6"
              geometry={nodes['Shape 6'].geometry}
              material={materials['Shape 6 Material']}
              castShadow
              receiveShadow
              position={[105.3, 217.95, -51.78]}
              rotation={[-0.26, 0, 0]}
              scale={0.95}
            />
            <mesh
              name="Shape 51"
              geometry={nodes['Shape 51'].geometry}
              material={materials['Shape 51 Material']}
              castShadow
              receiveShadow
              position={[-165.44, -26.03, 8.16]}
              rotation={[-0.26, 0, 0]}
              scale={0.95}
            />
            <mesh
              name="Shape 33"
              geometry={nodes['Shape 33'].geometry}
              material={materials['Shape 33 Material']}
              castShadow
              receiveShadow
              position={[-164.1, -59.18, 17.48]}
              rotation={[-0.26, 0, 0]}
              scale={0.95}
            />
            <mesh
              name="Shape 23"
              geometry={nodes['Shape 23'].geometry}
              material={materials.green}
              castShadow
              receiveShadow
              position={[-164.35, -59.81, 18.46]}
              rotation={[-0.26, 0, 0]}
              scale={0.95}
            />
            <mesh
              name="Shape3"
              geometry={nodes.Shape3.geometry}
              material={materials['Shape3 Material']}
              castShadow
              receiveShadow
              position={[-163.83, -120.71, 36.17]}
              rotation={[-0.26, 0, 0]}
              scale={0.95}
            />
            <mesh
              name="Rectangle 25"
              geometry={nodes['Rectangle 25'].geometry}
              material={materials['red-2']}
              castShadow
              receiveShadow
              position={[0, 0, -0.05]}
              rotation={[-0.26, 0, -Math.PI / 2]}
              scale={0.95}
            />
            <mesh
              name="Rectangle9"
              geometry={nodes.Rectangle9.geometry}
              material={materials['Rectangle9 Material']}
              castShadow
              receiveShadow
              position={[0, 0, 0.53]}
              rotation={[-0.26, 0, -Math.PI / 2]}
              scale={0.95}
            />
          </group>
          <mesh
            name="Cube 52"
            geometry={nodes['Cube 52'].geometry}
            material={materials['red-3']}
            castShadow
            receiveShadow
            position={[-1, 125.37, 14.49]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            name="Cube 6"
            geometry={nodes['Cube 6'].geometry}
            material={materials['artboard-ao']}
            castShadow
            receiveShadow
            position={[2.49, -110.74, -215.13]}
            rotation={[Math.PI / 6, 0, -Math.PI / 2]}
          />
          <mesh
            name="Cube 47"
            geometry={nodes['Cube 47'].geometry}
            material={materials['red-4']}
            castShadow
            receiveShadow
            position={[2.49, -180.05, 19.57]}
          />
          <mesh
            name="Cube 35"
            geometry={nodes['Cube 35'].geometry}
            material={materials['red-4']}
            castShadow
            receiveShadow
            position={[2.49, 164.41, -19.57]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            name="Cube 25"
            geometry={nodes['Cube 25'].geometry}
            material={materials['artboard-ao']}
            castShadow
            receiveShadow
            position={[118.68, -139.91, -19.57]}
            rotation={[0, 0, -1.4]}
          />
          <mesh
            name="Cube10"
            geometry={nodes.Cube10.geometry}
            material={materials['artboard-ao']}
            castShadow
            receiveShadow
            position={[-107.2, -134.71, -19.57]}
            rotation={[0, 0, -1.75]}
          />
        </group>
        <group name="table" position={[868.04, -467.73, -369.18]}>
          <mesh
            name="Cylinder 31"
            geometry={nodes['Cylinder 31'].geometry}
            material={materials['table-ao']}
            castShadow
            receiveShadow
            position={[262.37, -38.32, -709.39]}
          />
          <mesh
            name="Cylinder 23"
            geometry={nodes['Cylinder 23'].geometry}
            material={materials['table-ao']}
            castShadow
            receiveShadow
            position={[262.37, -38.32, 862.8]}
          />
          <mesh
            name="Cylinder 32"
            geometry={nodes['Cylinder 32'].geometry}
            material={materials['table-ao']}
            castShadow
            receiveShadow
            position={[-249.05, -35.67, -709.39]}
          />
          <mesh
            name="Cylinder4"
            geometry={nodes.Cylinder4.geometry}
            material={materials['table-ao']}
            castShadow
            receiveShadow
            position={[-249.05, -38.32, 862.8]}
          />
          <mesh
            name="Rectangle10"
            geometry={nodes.Rectangle10.geometry}
            material={materials['Rectangle10 Material']}
            castShadow
            receiveShadow
            position={[0, 230.16, 91.5]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          />
        </group>
        <group name="carpet" position={[-177.84, -318.39, 98.4]}>
          <mesh
            name="Ellipse 22"
            geometry={nodes['Ellipse 22'].geometry}
            material={materials['Ellipse 22 Material']}
            castShadow
            receiveShadow
            position={[0, 7.39, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1.09, 1.09, 1.66]}
          />
          <mesh
            name="Ellipse5"
            geometry={nodes.Ellipse5.geometry}
            material={materials['Ellipse5 Material']}
            castShadow
            receiveShadow
            position={[0, -7.39, 0]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={[1.09, 1.09, 1.66]}
          />
        </group>
        <hemisphereLight
          name="Default Ambient Light"
          intensity={0.75}
          color="#eaeaea"
          position={[0, 1, 0]}
        />
      </group>
    </>
  )
}

export default function App() {
  return (
    <Suspense fallback={null}>
      <Canvas flat shadows>
        <Scene />
        <OrbitControls />
      </Canvas>
    </Suspense>
  )
}
