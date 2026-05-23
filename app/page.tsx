<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

  {[
    {
      title: 'SEDAN',
      image:
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1400&auto=format&fit=crop',
      interior: '220$',
      exterior: '220$',
      package: '380$',
    },
    {
      title: 'VUS',
      image:
        'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1400&auto=format&fit=crop',
      interior: '230$',
      exterior: '230$',
      package: '400$',
    },
    {
      title: 'PICKUP / 7 PASSAGERS',
      image:
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1400&auto=format&fit=crop',
      interior: '250$',
      exterior: '250$',
      package: '440$',
    },
  ].map((car, index) => (
    <div
      key={index}
      className="bg-black border border-zinc-800 rounded-[34px] p-5"
    >

      <h4 className="text-center text-5xl font-black uppercase mb-6">
        {car.title}
      </h4>

      <img
        src={car.image}
        alt={car.title}
        className="w-full h-[320px] object-cover rounded-[30px] mb-6"
      />

      <div className="space-y-5">

        <div className="bg-[#050505] border border-zinc-800 rounded-[28px] px-5 py-5 flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-2xl bg-[#111111] flex items-center justify-center text-3xl">
              🧼
            </div>

            <p className="uppercase font-black text-2xl leading-tight">
              Intérieur
              <br />
              Premium
            </p>
          </div>

          <p className="text-red-500 text-5xl font-black">
            {car.interior}
          </p>
        </div>

        <div className="bg-[#050505] border border-zinc-800 rounded-[28px] px-5 py-5 flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-2xl bg-[#111111] flex items-center justify-center text-3xl">
              🚘
            </div>

            <p className="uppercase font-black text-2xl leading-tight">
              Extérieur
              <br />
              Premium
            </p>
          </div>

          <p className="text-red-500 text-5xl font-black">
            {car.exterior}
          </p>
        </div>

        <div className="bg-[#050505] border border-zinc-800 rounded-[28px] px-5 py-5 flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-2xl bg-[#111111] flex items-center justify-center text-3xl">
              🎁
            </div>

            <p className="uppercase font-black text-2xl leading-tight">
              Package
              <br />
              Int./Ext.
            </p>
          </div>

          <p className="text-red-500 text-5xl font-black">
            {car.package}
          </p>
        </div>

      </div>
    </div>
  ))}
</div>